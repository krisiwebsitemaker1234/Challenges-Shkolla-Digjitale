import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NumbersScreen = () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.numberBox}>
              <Text style={styles.numberText}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  numberBox: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#87ceeb',
    borderRadius: 5,
    alignItems: 'center',
  },
  numberText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NumbersScreen;
