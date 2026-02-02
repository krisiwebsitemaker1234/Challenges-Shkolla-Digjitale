//CountriesScreen.js
import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default function CountriesScreen({ navigation }) {
  const [searchText, setSearchText] = useState('')

  const countries = [
    { name: 'Albania', capital: 'Tirana', population: 2877797 },
    { name: 'USA', capital: 'Washington D.C.', population: 331002651 },
    { name: 'Japan', capital: 'Tokyo', population: 125960000 },
    { name: 'France', capital: 'Paris', population: 67081000 },
    { name: 'Brazil', capital: 'Brasília', population: 212559417 },
    { name: 'Germany', capital: 'Berlin', population: 83149300 },
    { name: 'India', capital: 'New Delhi', population: 1380004385 },
    { name: 'Canada', capital: 'Ottawa', population: 37742154 },
    { name: 'Australia', capital: 'Canberra', population: 25687041 },
    { name: 'China', capital: 'Beijing', population: 1439323776 }
  ]

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  )

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
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search countries..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredCountries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    margin: 20,
    paddingHorizontal: 15,
    fontSize: 16
  },
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
