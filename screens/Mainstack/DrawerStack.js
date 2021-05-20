/** @format */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PlusStackscreen from './Plusstack';
// import { Animated } from 'react-native';
import CustomDrawerContent from './customDrawer';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();
const { windowWidth, windowHeight } = Dimensions.get('window');

const DrawerList = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerPosition={'right'}
      drawerStyle={{
        // backgroundColor: 'white',
        backgroundColor: 'rgba(0,0,0,0,9)',
        width: windowWidth,
        height: windowHeight,
        // justifyContent: 'center',
        // borderRadius: 200,
      }}
      //   drawerType='front'
      //   hideStatusBar={true}
      //   overlayColor={'rgba(0,0,0,0.9)'}
      overlayColor={'rgba(0,0,0,0.9)'}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Plus' component={PlusStackscreen} />
    </Drawer.Navigator>
  );
};
export default DrawerList;
