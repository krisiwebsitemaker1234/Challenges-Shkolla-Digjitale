//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from './MenuScreen'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//HomeScreen.js
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Go Back to Menu" onPress={() => navigation.navigate('Menu')} />
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginTop: 20, padding: 10, backgroundColor: 'lightblue' }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

//ProfileScreen.js
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Profile Screen</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}
