import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const MenuView = ({navigation}) => {
  // Simulación de datos para cada opción del menú
  const menuItems = [
    {title: 'Requisitos', image: require('../assets/manual.png')},
    {title: 'Prueba y Rendimiento', image: require('../assets/manual.png')},
    {title: 'Incidentes', image: require('../assets/descargar-pdf.png')},
    {title: 'Rendimiento', image: require('../assets/descargar-pdf.png')},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>
      <View style={styles.menuItemsContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.title)}>
            <Image source={item.image} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 10,
    width: 150,
    height: 150,
    margin: 10,
    padding: 10,
  },
  menuItemIcon: {
    width: 64,
    height: 64,
    marginBottom: 10,
    tintColor: 'white',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default MenuView;
