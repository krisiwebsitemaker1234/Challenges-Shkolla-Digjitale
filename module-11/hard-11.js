//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdvancedBoxScreenChallenge from './AdvancedBoxScreenChallenge'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdvancedBoxScreenChallenge">
        <Stack.Screen name="AdvancedBoxScreenChallenge" component={AdvancedBoxScreenChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


//AdvancedBoxScreenChallenge.js
import React from 'react'
import { View, Text } from 'react-native'

export default function AdvancedBoxScreenChallenge() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'red', paddingLeft: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Box 1</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Box 2</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'blue', paddingRight: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Box 3</Text>
      </View>
    </View>
  )
}
