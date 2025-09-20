import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Imagen1 from './components/Imagen1.js';
import Imagen2 from './components/Imagen2.js';
import Imagen3 from './components/Imagen3.js';
const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Imagen1 />
<Imagen2 />
<Imagen3 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b80cfff',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
