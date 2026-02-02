//screens/About.js
import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default function About() {
  const aboutItems = [
    { id: '1', text: 'This app helps users manage daily tasks easily.' },
    { id: '2', text: 'It is built using React Native and modern hooks.' },
    { id: '3', text: 'The app supports navigation between multiple screens.' }
  ]

  const renderItem = ({ item }) => (
    <Text style={{ fontSize: 16, marginBottom: 10 }}>{item.text}</Text>
  )

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={aboutItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}
