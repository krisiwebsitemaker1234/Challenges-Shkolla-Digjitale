import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

export default function WeatherScreen() {
    const weather = 'Sunny';
    const temperature = '28';
    const iconUrl = 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png';


    return (
        <View style={styles.container}>
          <Text style={styles.title}>The Weather in Tirana</Text>
    
          <Image
            source={{ uri: iconUrl }}
            style={styles.icon}
          />
    
          <Text style={styles.weatherText}>{weather}</Text>
          <Text style={styles.tempText}>{temperature}°C</Text>
        </View>
      );
    }

    const styles = Stylesheet.create (
        {
            container: {
                display: 'block',
                float: 'right',
                background: 'none',
            },

            title: {
                textAlign: 'center',
                color: 'green',
                fontSize: '20px',
            },

            icon: {
                width: '50px',
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
            },

            weatherText: {
                textDecoration: 'none',
                color: 'red',
                fontSize: '10px',
            },

            tempText: {
                textDecoration: 'none',
                color: 'blue',
                fontSize: '15px',
            },
        }
    )