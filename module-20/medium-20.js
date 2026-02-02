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
      autoplay={true}
      autoplayTimeout={3}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
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
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3
  },
  activeDot: {
    backgroundColor: '#003366',
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3
  }
})


