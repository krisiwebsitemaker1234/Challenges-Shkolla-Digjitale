//components/Icon.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'

export default function Icon({ name, color = '#000', size = 40, library = 'Ionicons' }) {
  let IconComponent

  switch (library) {
    case 'Ionicons':
      IconComponent = Ionicons
      break
    case 'MaterialIcons':
      IconComponent = MaterialIcons
      break
    case 'Feather':
      IconComponent = Feather
      break
    default:
      IconComponent = Ionicons
  }

  return (
    <View style={styles.container}>
      <IconComponent name={name} size={size} color={color} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: '#333'
  }
})


//App.js
import React from 'react'
import { View } from 'react-native'
import Icon from './components/Icon'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <Icon name="home" color="#003366" size={50} library="Ionicons" />
      <Icon name="settings" color="red" size={50} library="MaterialIcons" />
      <Icon name="user" color="green" size={50} library="Feather" />
    </View>
  )
}
