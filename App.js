import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Buttons from './Buttons'

export default function App() {
  return (
    <View style={styles.container}>
     <Buttons />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
