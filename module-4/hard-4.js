import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const MoviesScreen = () => {
  const movies = [
    { 
      title: 'The Godfather', 
      year: 1972, 
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg' 
    },
    { 
      title: 'Pulp Fiction', 
      year: 1994, 
      image: 'https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg' 
    },
    { 
      title: 'The Matrix', 
      year: 1999, 
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg' 
    },
    { 
      title: 'Gladiator', 
      year: 2000, 
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_ver1.jpg' 
    },
    { 
      title: 'Inception', 
      year: 2010, 
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg' 
    },
    { 
      title: 'Interstellar', 
      year: 2014, 
      image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' 
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const isOld = item.year < 2000;
          return (
            <View
              style={[
                styles.movieBox,
                { backgroundColor: isOld ? '#f08080' : '#90ee90' },
              ]}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{item.year}</Text>
              </View>
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
    padding: 10,
  },
  movieBox: {
    flexDirection: 'row', 
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  year: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
});

export default MoviesScreen;
