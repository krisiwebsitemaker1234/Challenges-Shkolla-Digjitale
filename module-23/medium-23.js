// context/FavoritesContext.js
import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = product => {
    if (!favorites.find(item => item.id === product.id)) {
      setFavorites([...favorites, product])
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

// components/Item.js
import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext'

export default function Item({ product }) {
  const { addToFavorites } = useContext(FavoritesContext)

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>${product.price}</Text>
      {product.rating && <Text>Rating: {product.rating} ⭐</Text>}
      <Button title="Add to Favorites" onPress={() => addToFavorites(product)} />
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
  }
})


// screens/ProductsScreen.js
import React from 'react'
import { View, FlatList, Button } from 'react-native'
import products from '../data/products.json'
import Item from '../components/Item'

export default function ProductsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Go to Favorites" onPress={() => navigation.navigate('Favorites')} />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item product={item} />}
      />
    </View>
  )
}

// screens/FavoritesScreen.js
import React, { useContext } from 'react'
import { View, FlatList, Text } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext'

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext)

  if (favorites.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No favorites added yet</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 8 }}>
            {item.name} - ${item.price}
          </Text>
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
import FavoritesScreen from './screens/FavoritesScreen'
import { FavoritesProvider } from './context/FavoritesContext'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  )
}
