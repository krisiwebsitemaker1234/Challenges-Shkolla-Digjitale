import React from 'react';
import { Text, View, Stylesheet } from 'react-native';

export default function ProfileScreen() {
    const name = 'Kris';
    const age = 16;
    const bio = 'This is a description.';
  
    return (
      <View style={styles.container}>
        <Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Age: {age}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    );
  }

  const style = Stylesheet.create( { 
        container: {
            display: 'flex',
            width: '500',
            textAlign: 'center',
        },

        info: {
            fontWeight: '600',
            color: 'blue',
            fontSize: '16px',
        }, 

        bio: {
            fontWeight: '300',
            color: 'red',
            fontSize: '24px',  
            display: flex,
            width: 500,
            textAlign: center,
        },
  })