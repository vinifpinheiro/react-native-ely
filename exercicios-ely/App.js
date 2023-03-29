import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ex1 from './exercicios/ex1';
import Ex2 from './exercicios/ex2';
import Ex3 from './exercicios/ex3';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Exercicios de React Native
      </Text>
      <View style={styles.exercicio}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
          Exercicio 1
        </Text>
        <Ex1 />
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
          Exercicio 2
        </Text>
        <Ex2 />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Exercicio 3
        </Text>
        <Ex3 />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
  },
  exercicio: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  }
});
