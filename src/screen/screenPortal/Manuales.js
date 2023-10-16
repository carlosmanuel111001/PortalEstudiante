import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const Manuales = () => {
  // Datos de ejemplo para los manuales
  const manuales = [
    {id: '1', title: 'Manual de Usuario'},
    {id: '2', title: 'Manual Técnico'},
    {id: '3', title: 'Guía de Inicio Rápido'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manuales</Text>
      <FlatList
        data={manuales}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.manualItem}>
            <Text style={styles.manualTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF', // Color del título
  },
  manualItem: {
    backgroundColor: '#007BFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  manualTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Alinea el texto al centro
  },
});

export default Manuales;
