// context/FavoritesContext.js
import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = product => {
    const exists = favorites.find(item => item.id === product.id)

    if (exists) {
      setFavorites(favorites.filter(item => item.id !== product.id))
    } else {
      setFavorites([...favorites, product])
    }
  }

  const isFavorite = productId => {
    return favorites.some(item => item.id === productId)
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}


// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { FavoritesProvider } from './context/FavoritesContext'
import MainNavigator from './navigation/MainNavigator'

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  )
}


// components/Single.js
import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FavoritesContext } from '../context/FavoritesContext'
import StarRating from './StarRating'

export default function Single({ product }) {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext)

  const favorite = isFavorite(product.id)

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{product.title}</Text>

        <TouchableOpacity onPress={() => toggleFavorite(product)}>
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            size={24}
            color={favorite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: product.image }}
        style={{ width: 150, height: 150 }}
      />

      <StarRating rating={product.rating} />

      <Text>Price: ${product.price}</Text>
      <Text>{product.description}</Text>
    </View>
  )
}


// context/FavoritesScreen.js
import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext'
import Single from '../components/Single'

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext)

  if (favorites.length === 0) {
    return (
      <View style={{ padding: 16 }}>
        <Text>No favorites yet</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Single product={item} />}
    />
  )
}
