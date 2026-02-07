// screens/ProductsScreen.js
import React, { useState } from 'react'
import { View, FlatList, Button, TextInput, StyleSheet } from 'react-native'
import productsData from '../data/products.json'
import Item from '../components/Item'

export default function ProductsScreen() {
  const [products, setProducts] = useState(productsData)
  const [searchText, setSearchText] = useState('')

  const sortAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price)
    setProducts(sorted)
  }

  const sortDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price)
    setProducts(sorted)
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.buttons}>
        <Button title="Price ↑" onPress={sortAscending} />
        <Button title="Price ↓" onPress={sortDescending} />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            price={item.price}
            description={item.description}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
})
