import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipal from '../screenPortal/PantallaPrincipal';
import DescripcionPortal from '../screenPortal/DescripcionPortal';

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
    </Stack.Navigator>
  );
};

export default AppNavigator;
