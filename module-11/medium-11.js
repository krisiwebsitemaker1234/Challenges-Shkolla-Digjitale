//BoxScreenChallenge.js
import React from 'react'
import { View, Text } from 'react-native'

export default function BoxScreenChallenge() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ backgroundColor: 'red', color: 'white', padding: 20, position: 'absolute', left: 20, top: 50 }}>Box 1</Text>
      <Text style={{ backgroundColor: 'green', color: 'white', padding: 20 }}>Box 2</Text>
      <Text style={{ backgroundColor: 'blue', color: 'white', padding: 20, position: 'absolute', right: 20, bottom: 50 }}>Box 3</Text>
    </View>
  )
}
