import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DescripcionPortal = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            Sistema Integrado de Gestión Institucional - SIGI
          </Text>
        </View>
        {/* Agrega aquí la imagen de tu menú */}
        <Image
          source={require('../assets/menu.png')} // Reemplaza con la ruta correcta de tu imagen
          style={styles.menuIcon}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Descripción del Portal Estudiantil
        </Text>
        {/* Agrega aquí la información que quieras mostrar en esta pantalla */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          {/* Agrega aquí la imagen para el primer botón */}
          <Image
            source={require('../assets/menu.png')} // Reemplaza con la ruta correcta de la imagen
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Manuales</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          {/* Agrega aquí la imagen para el segundo botón */}
          <Image
            source={require('../assets/menu.png')} // Reemplaza con la ruta correcta de la imagen
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Descargas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          {/* Agrega aquí la imagen para el tercer botón */}
          <Image
            source={require('../assets/menu.png')} // Reemplaza con la ruta correcta de la imagen
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Otro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo de la pantalla
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#007BFF', // Color de fondo del encabezado
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // Sombra para un aspecto elevado
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  descriptionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007BFF', // Color del texto de la descripción
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007BFF', // Color de fondo del botón
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Color del texto del botón
  },
});

export default DescripcionPortal;
