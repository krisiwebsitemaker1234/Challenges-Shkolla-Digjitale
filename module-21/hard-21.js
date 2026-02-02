//screens/Home.js
import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Icon from '../components/Icon'

export default function Home() {
  const icons = [
    { id: '1', name: 'home', color: '#003366', size: 50, library: 'Ionicons' },
    { id: '2', name: 'settings', color: 'red', size: 50, library: 'MaterialIcons' },
    { id: '3', name: 'user', color: 'green', size: 50, library: 'Feather' },
    { id: '4', name: 'notifications', color: '#FF8C00', size: 50, library: 'Ionicons' },
    { id: '5', name: 'info', color: '#8A2BE2', size: 50, library: 'Feather' },
    { id: '6', name: 'star', color: '#FFD700', size: 50, library: 'MaterialIcons' }
  ]

  const renderItem = ({ item }) => (
    <Icon name={item.name} color={item.color} size={item.size} library={item.library} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={icons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})


//App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
