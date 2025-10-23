import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <Text style={styles.text}>test</Text>
      <Text style={styles.textHighlight}>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  textHighlight: {
    fontSize: 18,
    color: 'green',
    backgroundColor: '#f0f8ff',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
  },
});