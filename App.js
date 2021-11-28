/** @format */

import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import Screens from './screens/screens';
import AppLoading from 'expo-app-loading';

const App = ({ navigation }) => {
  LogBox.ignoreLogs(['Reanimated 2']);

  let [loaded] = useFonts({
    itim: require('./assets/font/Itim-Regular.ttf'),
    GoblinOne: require('./assets/font/GoblinOne-Regular.ttf'),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    );
  }
};
export default App;
