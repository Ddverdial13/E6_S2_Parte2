import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Imagen2 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img2.jpg')} style={styles.image} />
      <Text style={styles.text}>Saga favorita</Text>
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
    borderRadius: 15,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    fontStyle: 'italic',
  },
});

export default Imagen2;
