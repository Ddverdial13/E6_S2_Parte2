import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Imagen1 = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/imagen1.jpg")} style={styles.image} />
      <Text style={styles.text}>Mi juego favorito</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default Imagen1;
