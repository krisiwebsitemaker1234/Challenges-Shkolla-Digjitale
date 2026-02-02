//screens/DynamicSwiperScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native'
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

export default function DynamicSwiperScreen() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(res => res.json())
      .then(data => {
        const imageUrls = data.map(item => item.url)
        setImages(imageUrls)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#003366" />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={true}
        autoplay={true}
        autoplayTimeout={3}
        onIndexChanged={index => setCurrentIndex(index + 1)}
        showsPagination={false}
      >
        {images.map((url, idx) => (
          <View key={idx} style={styles.slide}>
            <Image source={{ uri: url }} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <View style={styles.pagination}>
        <Text style={styles.paginationText}>
          {currentIndex} / {images.length}
        </Text>
      </View>
    </View>
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
  image: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 12
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pagination: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20
  },
  paginationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})


