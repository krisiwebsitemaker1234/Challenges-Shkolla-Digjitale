//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentsScreen from './StudentsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Students">
        <Stack.Screen name="Students" component={StudentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


//StudentsScreen.js
import React from 'react'
import { ScrollView, View } from 'react-native'
import Student from './Student'

export default function StudentsScreen() {
  const students = [
    {
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      description: 'Alice is a top-performing student in mathematics.'
    },
    {
      name: 'Bob Smith',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      description: 'Bob is very creative and enjoys art and design.'
    },
    {
      name: 'Clara Lee',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      description: 'Clara loves science and is part of the robotics club.'
    }
  ]

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          image={student.image}
          description={student.description}
        />
      ))}
    </ScrollView>
  )
}

//Student.js
import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Student({ name, image, description }) {
  return (
    <View style={{ alignItems: 'center', marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}>
      <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
      <Text style={{ textAlign: 'center', marginTop: 5 }}>{description}</Text>
    </View>
  )
}
