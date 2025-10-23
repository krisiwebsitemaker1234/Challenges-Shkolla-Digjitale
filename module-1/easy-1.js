import React from 'react';
import { Text, Stylesheet, View} from 'react-native';

export default function MainScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Test Text</Text>
        <Text style={styles.text}>This text is below the other text</Text>
      </View>
    );
  }

  const styles = Stylesheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
            alignItems: center,
        },

        text: {
        color: red,
        fontSize: 20,
        }
    }
  )