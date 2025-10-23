import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FactsScreen() {
  const fact1 = "Australia is wider than the moon.";
  let fact2 = "Ketchup was sold as a medicine in the 1830s to cure indigestion.";
  const fact3 = "Antarctica has the largest unclaimed territory on Earth.";

  fact2 = "Did you know ketchup was sold as a medicine in the 1830s to cure indigestion?";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fun Facts</Text>

      <Text style={styles.factOne}>{fact1}</Text>
      <Text style={styles.factTwo}>{fact2}</Text>
      <Text style={styles.factThree}>{fact3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: '20px',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: '20px',
  },
  factOne: {
    fontSize: '16px',
    color: '#2e7d32',
    marginBottom: '10px',
    textAlign: 'center',
  },
  factTwo: {
    fontSize: '16px',
    color: '#ef6c00',
    fontStyle: 'italic',
    marginBottom: '10px',
    textAlign: 'center',
  },
  factThree: {
    fontSize: '16px',
    color: '#6a1b9a',
    fontWeight: '600',
    textAlign: 'center',
  },
});