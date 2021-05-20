/** @format */

import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from './Signin';
import Signup from './Signup';
import DrawerList from './Mainstack/DrawerStack';

enableScreens();
const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Signin' component={Signin} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Main' component={DrawerList} />
    </Stack.Navigator>
  );
};

export default Screens;
