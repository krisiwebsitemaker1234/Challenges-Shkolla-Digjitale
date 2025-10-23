import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuoteScreen() {
  const quote = "The only way to do great work is to love what you do.";

  let author = "Steve Jobs";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote of the Day</Text>
      <Text style={styles.quote}>"{quote}"</Text>
      <Text style={styles.author}>— {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: '20px',
  },
  quote: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
    marginBottom: '15px',
    lineHeight: '26px',
  },
  author: {
    fontSize: '18px',
    color: '#555',
  },
});