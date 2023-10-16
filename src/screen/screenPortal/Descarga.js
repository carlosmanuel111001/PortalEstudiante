import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Descargas = () => {
  // Datos de ejemplo para las descargas
  const descargas = [
    {id: '1', title: 'Informe Mensual', size: '2.5 MB', date: '01/10/2023'},
    {id: '2', title: 'Informe Anual', size: '5.2 MB', date: '15/09/2023'},
    {id: '3', title: 'Informe Trimestral', size: '3.8 MB', date: '05/08/2023'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descargas</Text>
      <FlatList
        data={descargas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.descargaItem}>
            <Image
              source={require('../assets/menu.png')}
              style={styles.iconoDocumento}
            />
            <View style={styles.descargaInfo}>
              <Text style={styles.descargaTitulo}>{item.title}</Text>
              <Text style={styles.descargaDetalle}>
                Tamaño: {item.size} - Fecha: {item.date}
              </Text>
            </View>
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
    color: '#007BFF',
  },
  descargaItem: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconoDocumento: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  descargaInfo: {
    flex: 1,
  },
  descargaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descargaDetalle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Descargas;
