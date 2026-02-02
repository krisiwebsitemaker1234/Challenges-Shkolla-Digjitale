//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BoxScreenChallenge from './BoxScreenChallenge'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoxScreenChallenge">
        <Stack.Screen name="BoxScreenChallenge" component={BoxScreenChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//BoxScreenChallenge.js
import React from 'react'
import { View, Text } from 'react-native'

export default function BoxScreenChallenge() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={{ backgroundColor: 'red', color: 'white', padding: 20 }}>Box 1</Text>
      <Text style={{ backgroundColor: 'green', color: 'white', padding: 20 }}>Box 2</Text>
      <Text style={{ backgroundColor: 'blue', color: 'white', padding: 20 }}>Box 3</Text>
    </View>
  )
}
