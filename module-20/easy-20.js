//screens/SwiperScreen.js
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

export default function SwiperScreen() {
  return (
    <Swiper
      showsButtons={true}
      loop={true}
      activeDotColor="#003366"
      style={{ flex: 1 }}
    >
      <View style={[styles.slide, { backgroundColor: '#FF6B6B' }]}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: '#4ECDC4' }]}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: '#556270' }]}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  }
})


//App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SwiperScreen from './screens/SwiperScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Swiper" component={SwiperScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
