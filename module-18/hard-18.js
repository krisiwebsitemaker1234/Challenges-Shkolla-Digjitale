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


//screens/Settings.js
import React from 'react'
import { View, Text } from 'react-native'

export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  )
}


//screens/Contact.js
import React from 'react'
import { View, Text } from 'react-native'

export default function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Screen</Text>
    </View>
  )
}


//navigation/BottomTabNavigator.js
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'
import Home from '../screens/Home'
import About from '../screens/About'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Contact from '../screens/Contact'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const [settingsCount, setSettingsCount] = useState(0)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#003366',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f9f9f9',
          paddingBottom: 5,
          height: 60
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        listeners={{
          focus: () => setSettingsCount(prev => prev + 1)
        }}
        options={{
          tabBarBadge: settingsCount > 0 ? settingsCount : null,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}


//App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './navigation/BottomTabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
