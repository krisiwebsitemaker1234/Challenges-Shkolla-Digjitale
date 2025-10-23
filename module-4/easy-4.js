import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ColorsScreen = () => {
  const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Purple', hex: '#800080' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hex}
        renderItem={({ item }) => {
          return (
            <View style={[styles.colorBox, { backgroundColor: item.hex }]}>
              <Text style={styles.colorText}>{item.name}</Text>
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
  colorBox: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  colorText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorsScreen;
