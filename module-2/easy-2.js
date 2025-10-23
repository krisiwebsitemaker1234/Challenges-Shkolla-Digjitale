import React from "react";
import { Text, Stylesheet, View} from 'react-native';

export default function GreetingsScreen() {
    return(
        <View style={Stylesheet.container}>
            <Text style={Stylesheet.text}>Hello, World!</Text>
        </View>
    );
}

const styles = Stylesheet.create(
    {
        container: {
            display: 'flex',
            padding: '20px',
            justifyContent: 'center',
        },

        text: {
            color: 'blue',
            fontSize: '14px',
        }
    }
  )

