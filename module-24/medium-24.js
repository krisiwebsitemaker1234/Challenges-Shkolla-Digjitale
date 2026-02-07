// screens/AndroidProductsScreen.js
import React, { useState } from 'react'
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native'
import products from '../data/products.json'
import Item from '../components/Item'

export default function AndroidProductsScreen() {
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const androidProducts = products.filter(
    item => item.category === 'Android'
  )

  const filteredProducts = showInStockOnly
    ? androidProducts.filter(item => item.stock === true)
    : androidProducts

  return (
    <View style={styles.container}>
      {/* Stock Filter */}
      <View style={styles.filterRow}>
        <Text style={styles.filterText}>Show in-stock only</Text>
        <Switch
          value={showInStockOnly}
          onValueChange={setShowInStockOnly}
        />
      </View>

      <FlatList
        data={filteredProducts}
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
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  filterText: {
    fontSize: 16,
    fontWeight: '500'
  }
})


