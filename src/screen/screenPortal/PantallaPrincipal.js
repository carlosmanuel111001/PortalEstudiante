import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PantallaPrincipal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a Infostudia!</Text>
      <Text style={styles.subtitle}>Tu plataforma educativa favorita</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Agrega aquí la lógica para el botón Entrar */
        }}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cambia el color de fondo según tu preferencia
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  button: {
    backgroundColor: '#007BFF', // Cambia el color del botón según tu preferencia
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PantallaPrincipal;
