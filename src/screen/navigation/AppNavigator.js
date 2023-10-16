import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PantallaPrincipal from '../screenPortal/PantallaPrincipal';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaPrincipal">
      <Stack.Screen
        name="PantallaPrincipal"
        component={PantallaPrincipal}
        options={{title: 'PantallaPrincipal'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
