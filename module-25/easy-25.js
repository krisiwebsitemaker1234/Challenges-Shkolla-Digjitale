// data.json
[
  {
    "id": "1",
    "title": "iPhone 14",
    "price": 999,
    "image": "https://example.com/iphone14.png",
    "description": "Apple iPhone 14 with A15 Bionic chip and advanced dual-camera system."
  },
  {
    "id": "2",
    "title": "Samsung Galaxy S23",
    "price": 899,
    "image": "https://example.com/galaxys23.png",
    "description": "Samsung flagship smartphone with high-resolution display and powerful performance."
  },
  {
    "id": "3",
    "title": "Google Pixel 8",
    "price": 799,
    "image": "https://example.com/pixel8.png",
    "description": "Google Pixel phone known for its clean Android experience and excellent camera."
  }
]


// components/Single.js
import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Single({ title, image, price, description }) {
  return (
    <View style={{ padding: 16 }}>
      <Text>{title}</Text>

      <Image
        source={{ uri: image }}
        style={{ width: 150, height: 150 }}
      />

      <Text>Price: ${price}</Text>

      <Text>{description}</Text>
    </View>
  )
}
