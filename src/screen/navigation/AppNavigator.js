import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipal from '../screenPortal/PantallaPrincipal';
import DescripcionPortal from '../screenPortal/DescripcionPortal';
import Manuales from '../screenPortal/Manuales';

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
    </Stack.Navigator>
  );
};

export default AppNavigator;
