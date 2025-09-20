import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Imagen3 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img3.jpg')} style={styles.image} />
      <Text style={styles.text}>Personaje favorito</Text>
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
    borderRadius: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
  },
});

export default Imagen3;
