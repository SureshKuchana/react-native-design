import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/29767625?s=400&u=e4ecc18866f0e89b96a99b4bb4131deffb49347f&v=4',
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.name}>Suresh Koochana</Text>
        <StatusBar />
      </View>
      <Text style={styles.subtitle}>Software Engineer I</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#b8bece',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    color: '#3c4560',
    fontWeight: 'bold',
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 80,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginLeft: 20,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  subtitle: {
    color: '#b8becc',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 50,
    textTransform: 'uppercase',
  },
});
