//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CountriesScreen from './CountriesScreen'
import CountryDetailsScreen from './CountryDetailsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Countries">
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


//CountriesScreen.js
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default function CountriesScreen({ navigation }) {
  const countries = [
    { name: 'Albania', capital: 'Tirana', population: 2877797 },
    { name: 'USA', capital: 'Washington D.C.', population: 331002651 },
    { name: 'Japan', capital: 'Tokyo', population: 125960000 },
    { name: 'France', capital: 'Paris', population: 67081000 },
    { name: 'Brazil', capital: 'Brasília', population: 212559417 }
  ]

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryBox}
      onPress={() => navigation.navigate('CountryDetails', { country: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text>Capital: {item.capital}</Text>
      <Text>Population: {item.population.toLocaleString()}</Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={countries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  )
}

const styles = StyleSheet.create({
  countryBox: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  }
})


//CountryDetailsScreen.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CountryDetailsScreen({ route }) {
  const { country } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{country.name}</Text>
      <Text style={styles.detail}>Capital: {country.capital}</Text>
      <Text style={styles.detail}>Population: {country.population.toLocaleString()}</Text>
    </View>
  )
}

/*const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  detail: { fontSize: 18, marginBottom: 10 }
}) */
