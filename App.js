import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the square vertically
    alignItems: 'center', // Center the square horizontally
    backgroundColor: '#f0f0f0', // Light background color
  },
  square: {
    width: 150, // Width of the square
    height: 150, // Height of the square
    backgroundColor: '#4CAF50', // Background color of the square (green)
    justifyContent: 'center', // Center the text vertically inside the square
    alignItems: 'center', // Center the text horizontally inside the square
  },
  text: {
    color: '#fff', // Text color (white)
    fontSize: 16, // Font size
    fontWeight: 'bold', // Bold text
  },
});

export default App;