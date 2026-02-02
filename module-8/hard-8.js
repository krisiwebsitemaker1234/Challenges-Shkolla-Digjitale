//Student.js
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Student({ name, image, description }) {
  const [favourite, setFavourite] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Student Selected', name)}
      style={{ alignItems: 'center', marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}
    >
      <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 8 }}>{name}</Text>
        <TouchableOpacity onPress={() => setFavourite(!favourite)}>
          <Icon name="heart" size={20} color={favourite ? 'red' : 'gray'} />
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>{description}</Text>
    </TouchableOpacity>
  )
}