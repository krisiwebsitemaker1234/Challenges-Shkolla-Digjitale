//screens/Contact.js
import React from 'react'
import { View, Text } from 'react-native'

export default function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Page</Text>
    </View>
  )
}

//navigation/MainStackNavigator.js
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Contact from '../screens/Contact'

const Stack = createNativeStackNavigator()

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  )
}

//App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './navigation/MainStackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

//screens/Home.js
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={{ marginTop: 20 }}>Go to Contact</Text>
      </TouchableOpacity>
    </View>
  )
}

