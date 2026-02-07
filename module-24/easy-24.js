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
    "price": 899,
    "stock": true
  },
  {
    "id": "5",
    "name": "Google Pixel 8",
    "category": "Android",
    "price": 799,
    "stock": false
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

      {product.rating && (
        <Text>Rating: {product.rating} ⭐</Text>
      )}

      {product.stock !== undefined && (
        <Text style={product.stock ? styles.inStock : styles.outOfStock}>
          {product.stock ? 'In Stock' : 'Out of Stock'}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  inStock: {
    color: 'green',
    marginTop: 4
  },
  outOfStock: {
    color: 'red',
    marginTop: 4
  }
})


