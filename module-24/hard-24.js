// context/CartContext.js
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = index => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}


// App.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CartProvider } from './context/CartContext'
import MainNavigator from './navigation/MainNavigator'

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CartProvider>
  )
}

// components/Item.js
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CartProvider } from './context/CartContext'
import MainNavigator from './navigation/MainNavigator'

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CartProvider>
  )
}

// screens/CartScreen.js
import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { CartContext } from '../context/CartContext'

export default function CartScreen() {
  const { cart, removeFromCart, getCartTotal } = useContext(CartContext)

  return (
    <View style={{ padding: 16 }}>
      <Text>Shopping Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Button
              title="Remove"
              onPress={() => removeFromCart(index)}
            />
          </View>
        )}
      />

      <Text>Total: ${getCartTotal()}</Text>
    </View>
  )
}

//navigation/StackNavigator.js
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from '../screens/ProductsScreen'
import CartScreen from '../screens/CartScreen'

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}
