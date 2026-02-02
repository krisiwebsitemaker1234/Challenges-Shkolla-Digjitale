//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UsersScreen from './UsersScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users">
        <Stack.Screen name="Users" component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//UsersScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'

export default function UsersScreen() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  const renderItem = ({ item, index }) => {
    const alignStyle = index === 2 ? 'flex-end' : 'flex-start'
    return (
      <View style={[styles.userBox, { alignSelf: alignStyle }]}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  )
}

const styles = StyleSheet.create({
  userBox: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 15,
    width: '80%'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  email: {
    color: '#555'
  }
})