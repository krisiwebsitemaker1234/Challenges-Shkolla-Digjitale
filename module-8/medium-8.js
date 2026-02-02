//Student.js
import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'

export default function Student({ name, image, description }) {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Student Selected', name)}
      style={{ alignItems: 'center', marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}
    >
      <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>{description}</Text>
    </TouchableOpacity>
  )
}
