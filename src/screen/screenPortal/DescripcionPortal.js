import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DescripcionPortal = ({navigation}) => {
  const handleNavigateToDescargas = () => {
    navigation.navigate('Descarga');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            Sistema Integrado de Gestión Institucional - SIGI
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image
            source={require('../assets/menu.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Descripción del Portal Estudiantil
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Manuales')}>
          <Image
            source={require('../assets/manual.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Manuales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToDescargas}>
          <Image
            source={require('../assets/descargar-pdf.png')}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Descargas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/menu.png')}
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
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#007BFF',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  descriptionText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007BFF',
  },
  buttonContainer: {
    flexDirection: 'row', // Botones en fila horizontal
    justifyContent: 'center', // Alineados al centro
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 20, // Botones un poco más redondeados
    paddingHorizontal: 15, // Ajuste del espaciado
    paddingVertical: 10, // Ajuste del espaciado
    marginHorizontal: 10, // Espaciado horizontal uniforme
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DescripcionPortal;
