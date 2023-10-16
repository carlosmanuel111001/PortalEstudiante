import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipal from '../screenPortal/PantallaPrincipal';
import DescripcionPortal from '../screenPortal/DescripcionPortal';
import Manuales from '../screenPortal/Manuales';
import Descarga from '../screenPortal/Descarga';
import Menu from '../screenPortal/Menu';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaPrincipal">
      <Stack.Screen
        name="PantallaPrincipal"
        component={PantallaPrincipal}
        options={{title: 'PantallaPrincipal'}}
      />
      <Stack.Screen
        name="DescripcionPortal"
        component={DescripcionPortal}
        options={{title: 'DescripcionPortal'}}
      />
      <Stack.Screen
        name="Manuales"
        component={Manuales}
        options={{title: 'Manuales'}}
      />
      <Stack.Screen
        name="Descarga"
        component={Descarga}
        options={{title: 'Descarga'}}
      />
      <Stack.Screen name="Menu" component={Menu} options={{title: 'Menu'}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
