//screens/Home.js
import React from 'react'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}


//screens/About.js
import React from 'react'
import { View, Text } from 'react-native'

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
    </View>
  )
}


//screens/Profile.js
import React from 'react'
import { View, Text } from 'react-native'

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}


//navigation/CustomDrawerContent.js
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CustomDrawerContent({ navigation }) {
  const screens = ['Home', 'About', 'Profile']

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      {screens.map(screen => (
        <TouchableOpacity
          key={screen}
          style={styles.item}
          onPress={() => navigation.navigate(screen)}
        >
          <Text style={styles.text}>{screen}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  text: {
    fontSize: 18
  }
})


//navigation/DrawerNavigator.js
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import About from '../screens/About'
import Profile from '../screens/Profile'
import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
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
