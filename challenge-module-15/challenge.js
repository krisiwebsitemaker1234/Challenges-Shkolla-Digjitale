//data/users.json
[
  { "id": 1, "name": "Elon Musk", "email": "elon@tesla.com" },
  { "id": 2, "name": "Bill Gates", "email": "bill@gatesfoundation.org" },
  { "id": 3, "name": "Sundar Pichai", "email": "sundar@google.com" },
  { "id": 4, "name": "Satya Nadella", "email": "satya@microsoft.com" },
  { "id": 5, "name": "Tim Cook", "email": "tim@apple.com" }
]

//LocalDataScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import users from './data/users.json'

export default function LocalDataScreen() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(users)
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>
  )

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
})


//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LocalDataScreen from './LocalDataScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Local JSON Data" component={LocalDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

