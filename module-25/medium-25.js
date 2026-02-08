// data.json
[
  {
    "id": "1",
    "title": "iPhone 14",
    "price": 999,
    "image": "https://example.com/iphone14.png",
    "description": "Apple iPhone 14 with A15 Bionic chip.",
    "rating": 4.5
  },
  {
    "id": "2",
    "title": "Samsung Galaxy S23",
    "price": 899,
    "image": "https://example.com/galaxys23.png",
    "description": "Samsung flagship with AMOLED display.",
    "rating": 4
  },
  {
    "id": "3",
    "title": "Google Pixel 8",
    "price": 799,
    "image": "https://example.com/pixel8.png",
    "description": "Clean Android and top-tier camera.",
    "rating": 3.5
  }
]

// components/StarRating.js
import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function StarRating({ rating, size = 20, color = '#FFD700' }) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <View style={{ flexDirection: 'row' }}>
      {Array(fullStars).fill().map((_, i) => (
        <Ionicons key={`full-${i}`} name="star" size={size} color={color} />
      ))}

      {halfStar && (
        <Ionicons name="star-half" size={size} color={color} />
      )}

      {Array(emptyStars).fill().map((_, i) => (
        <Ionicons key={`empty-${i}`} name="star-outline" size={size} color={color} />
      ))}
    </View>
  )
}


// components/Single.js
import React from 'react'
import { View, Text, Image } from 'react-native'
import StarRating from './StarRating'

export default function Single({ title, image, price, description, rating }) {
  return (
    <View style={{ padding: 16 }}>
      <Text>{title}</Text>

      <Image
        source={{ uri: image }}
        style={{ width: 150, height: 150 }}
      />

      <StarRating rating={rating} />

      <Text>Price: ${price}</Text>

      <Text>{description}</Text>
    </View>
  )
}

