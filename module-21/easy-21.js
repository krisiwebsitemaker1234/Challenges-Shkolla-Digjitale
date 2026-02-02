import React from 'react'
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'

export default function Icon({ name, color = '#000', size = 24, library = 'Ionicons' }) {
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

  return <IconComponent name={name} size={size} color={color} />
}


//App.js
import React from 'react'
import { View } from 'react-native'
import Icon from './components/Icon'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name="home" color="#003366" size={40} library="Ionicons" />
      <Icon name="settings" color="red" size={40} library="MaterialIcons" />
      <Icon name="user" color="green" size={40} library="Feather" />
    </View>
  )
}
