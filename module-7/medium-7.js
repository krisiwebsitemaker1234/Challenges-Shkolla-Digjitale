//HomeScreen.js
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Go Back to Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  )
}
