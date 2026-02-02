//naviagtion/MainStackNavigator.js
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'

const Stack = createNativeStackNavigator()

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  )
}


//navigation/DrawerNavigator.js
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainStackNavigator from './MainStackNavigator'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="About" component={MainStackNavigator} />
      <Drawer.Screen name="Contact" component={MainStackNavigator} />
    </Drawer.Navigator>
  )
}


//App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}


//screens/Home.js
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  )
}


//screens/About.js
import React from 'react'
import { View, Text } from 'react-native'

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Page</Text>
    </View>
  )
}


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
