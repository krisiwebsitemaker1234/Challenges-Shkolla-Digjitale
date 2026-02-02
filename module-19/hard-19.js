//screens/DynamicScreen.js
import React from 'react'
import { View, Text } from 'react-native'

export default function DynamicScreen({ route }) {
  const { screenName } = route.params

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{screenName} Screen</Text>
    </View>
  )
}


//navigation/CustomDrawerContent.js
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'

export default function CustomDrawerContent({ navigation }) {
  const [screens, setScreens] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock API to fetch screen names
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(res => res.json())
      .then(data => {
        const screenNames = data.map(user => user.name)
        setScreens(screenNames)
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
        <ActivityIndicator size="large" color="#003366" />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      {screens.map(screen => (
        <TouchableOpacity
          key={screen}
          style={styles.item}
          onPress={() =>
            navigation.navigate('DynamicScreen', { screenName: screen })
          }
        >
          <Text style={styles.text}>{screen}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  item: { padding: 20, borderBottomWidth: 1, borderColor: '#ccc' },
  text: { fontSize: 16 }
})


//navigation/DrawerNavigator.js
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DynamicScreen from '../screens/DynamicScreen'
import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="DynamicScreen"
        component={DynamicScreen}
        options={{ title: 'Dynamic Screen' }}
      />
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
