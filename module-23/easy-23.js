// data.json
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
    "rating": 4.7
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

export default function Item({ name, price, rating }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      {rating && <Text style={styles.rating}>Rating: {rating} ⭐</Text>}
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
  price: {
    fontSize: 16,
    color: '#003366',
    marginVertical: 4
  },
  rating: {
    fontSize: 14,
    color: '#444'
  }
})

// screens/ProductsScreen.js
import React from 'react'
import { View, FlatList } from 'react-native'
import products from '../data/products.json'
import Item from '../components/Item'

export default function ProductsScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        )}
      />
    </View>
  )
}

// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './screens/ProductsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
