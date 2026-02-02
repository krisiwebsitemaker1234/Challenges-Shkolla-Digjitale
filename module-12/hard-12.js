//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserPostsScreen from './UserPostsScreen'
import UserDetailsScreen from './UserDetailsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserPosts">
        <Stack.Screen name="UserPosts" component={UserPostsScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//UserPostsScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'

export default function UserPostsScreen({ navigation }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.userBox} onPress={() => navigation.navigate('UserDetails', { userId: item.id })}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  )
}

//const styles = StyleSheet.create({
// center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// userBox: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 15 },
// name: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
// email: { color: '#555' }
//})


//UserDetailsScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'

export default function UserDetailsScreen({ route }) {
  const { userId } = route.params
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json()),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json())
    ])
      .then(([userData, postsData]) => {
        setUser(userData)
        setPosts(postsData)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [userId])

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!user) {
    return (
      <View style={styles.center}>
        <Text>User not found</Text>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={styles.detailBox}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>Username: {user.username}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Website: {user.website}</Text>
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Posts:</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postBox}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  detailBox: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 20 },
  name: { fontWeight: 'bold', fontSize: 20, marginBottom: 5 },
  postBox: { padding: 10, backgroundColor: '#e0f7fa', borderRadius: 8, marginBottom: 10 },
  postTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 3 },
  postBody: { color: '#555' }
})
