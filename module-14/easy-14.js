//CountriesScreen.js
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export default function CountriesScreen() {
  const countries = [
    { name: 'Albania', capital: 'Tirana', population: 2877797 },
    { name: 'USA', capital: 'Washington D.C.', population: 331002651 },
    { name: 'Japan', capital: 'Tokyo', population: 125960000 },
    { name: 'France', capital: 'Paris', population: 67081000 },
    { name: 'Brazil', capital: 'Brasília', population: 212559417 }
  ]

  const renderItem = ({ item }) => (
    <View style={styles.countryBox}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Capital: {item.capital}</Text>
      <Text>Population: {item.population.toLocaleString()}</Text>
    </View>
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
