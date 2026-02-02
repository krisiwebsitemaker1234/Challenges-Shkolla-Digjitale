//ProductScreen.js
import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default function ProductScreen() {
  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 },
    { id: 4, name: 'Keyboard', price: 100 }
  ]

  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart([...cart, product])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  const renderItem = ({ item }) => (
    <View style={styles.productBox}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />

      <View style={styles.cartTotal}>
        <Text style={styles.totalText}>Cart Total: ${getCartTotal()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productBox: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  cartTotal: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
