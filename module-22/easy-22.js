// data/products.json
[
  {
    "id": "1",
    "name": "Laptop",
    "price": 1200,
    "description": "A high-performance laptop suitable for work and study."
  },
  {
    "id": "2",
    "name": "Smartphone",
    "price": 800,
    "description": "A modern smartphone with a high-resolution display."
  },
  {
    "id": "3",
    "name": "Headphones",
    "price": 150,
    "description": "Noise-cancelling headphones for an immersive audio experience."
  }
]


// components/Item.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Item({ name, price, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description}>{description}</Text>
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
  description: {
    fontSize: 14,
    color: '#555'
  }
})

//Screens/ProductsScreen.js
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
            description={item.description}
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

