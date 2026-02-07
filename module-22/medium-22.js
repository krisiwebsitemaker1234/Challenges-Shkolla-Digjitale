// screens/ProductsScreen.js
import React, { useState } from 'react'
import { View, FlatList, Button } from 'react-native'
import productsData from '../data/products.json'
import Item from '../components/Item'

export default function ProductsScreen() {
  const [products, setProducts] = useState(productsData)

  const sortAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price)
    setProducts(sorted)
  }

  const sortDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price)
    setProducts(sorted)
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <Button title="Price ↑" onPress={sortAscending} />
        <Button title="Price ↓" onPress={sortDescending} />
      </View>

      <FlatList
        data={products}
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
