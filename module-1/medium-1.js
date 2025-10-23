import React from 'react';
import { Text, Stylesheet, View} from 'react-native';

export default function MainScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to this React course</Text>
        <Text style={styles.text}>THis text is different from challenge 1</Text>
      </View>
    );
  }

  const styles = Stylesheet.create(
    {
        container: {
            display: flex,
            padding: 0,
            alignItems: left,
        },

        text: {
        color: green,
        fontSize: 25,
        }
    }
  )