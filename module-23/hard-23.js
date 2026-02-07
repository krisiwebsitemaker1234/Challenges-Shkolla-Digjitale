// data/products.json
[
  {
    "id": "1",
    "name": "iPhone 15",
    "category": "iOS",
    "price": 999,
    "rating": 4.8
  },
  {
    "id": "2",
    "name": "iPad Pro",
    "category": "iOS",
    "price": 1099,
    "rating": 4.6
  },
  {
    "id": "3",
    "name": "MacBook Air",
    "category": "iOS",
    "price": 1299,
    "rating": 4.9
  },
  {
    "id": "4",
    "name": "Samsung Galaxy S23",
    "category": "Android",
    "price": 899
  }
]

// components/Item.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Item({ product }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>${product.price}</Text>
      {product.rating && <Text>Rating: {product.rating} ⭐</Text>}
    </View>
  )
}

/* const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})  */

// screens/IOSProductsScreen.js
import React, { useState } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
import products from '../data/products.json'
import Item from '../components/Item'

export default function IosProductsScreen() {
  const [minRating, setMinRating] = useState(0)

  const iosProducts = products.filter(
    product =>
      product.category === 'iOS' &&
      product.rating >= minRating
  )

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Minimum Rating: {minRating.toFixed(1)}
      </Text>

      <Slider
        minimumValue={0}
        maximumValue={5}
        step={0.1}
        value={minRating}
        onValueChange={setMinRating}
        minimumTrackTintColor="#003366"
        maximumTrackTintColor="#ccc"
      />

      <FlatList
        data={iosProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item product={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  label: {
    fontSize: 16,
    marginBottom: 8
  }
})
