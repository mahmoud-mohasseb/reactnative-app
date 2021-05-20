/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../MainScreen/Homesreen';
import Settings from '../MainScreen/Settings';
import Main from '../MainTab';
const PlusStack = createStackNavigator();

const PlusStackscreen = () => {
  return (
    <PlusStack.Navigator screenOptions={{ headerShown: false }}>
      <PlusStack.Screen name='Main' component={Main} />
      <PlusStack.Screen name='Homescreen' component={Homescreen} />
      <PlusStack.Screen name='Settings' component={Settings} />
    </PlusStack.Navigator>
  );
};

export default PlusStackscreen;
