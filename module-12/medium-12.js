//PostsScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'

export default function PostsScreen() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 10))
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <View style={styles.postBox}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  )
}

const styles = StyleSheet.create({
  postBox: {
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    marginBottom: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  body: {
    color: '#555'
  }
})
