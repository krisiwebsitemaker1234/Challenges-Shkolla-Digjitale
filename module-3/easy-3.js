import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FruitScreen() {
  const favoriteFruit = 'Mango';
  let secondFruit = 'Banana';

  secondFruit = 'Apple';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruit Screen</Text>
      <Text style={styles.text}>My favorite fruit is: {favoriteFruit}</Text>
      <Text style={styles.text}>Another fruit I like is: {secondFruit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff7e6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
});