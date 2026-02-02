import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>

      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { padding: 12, borderWidth: 1, borderRadius: 6, marginBottom: 12 },
  postTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 }
});