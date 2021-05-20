/** @format */
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Feather, AntDesign } from '@expo/vector-icons';
import { Animated } from 'react-native';
import Homescreen from './MainScreen/Homesreen';
import Settings from './MainScreen/Settings';
import Plus from './MainScreen/Plus';

enableScreens();
const Tab = createBottomTabNavigator();

const Main = () => {
  const PlusY = React.useRef(new Animated.Value(0)).current;
  Animated.timing(PlusY, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();
  return (
    <Tab.Navigator
      initialRouteName='Plus'
      tabBarOptions={{
        showLabel: false,
        // labelStyle: { fontSize: 15, fontFamily: 'itim' },
        style: {
          // backgroundColor: 'powderblue',
          position: 'absolute',
          backgroundColor: 'white',
          paddingBottom: 4,
          // margin: 80,
          left: 80,
          right: 80,
          bottom: 50,
          borderRadius: 30,
          height: 60,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={Homescreen}
        options={{
          // tabBarVisible: false,
          tabBarIcon: ({ focused, size }) => (
            <Octicons
              name='home'
              size={size}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Plus'
        component={Plus}
        options={{
          // tabBarVisible: false,
          tabBarIcon: ({ focused }) => (
            <Animated.View
              style={{
                // opacity: MenuFadein
                transform: [
                  {
                    translateY: PlusY.interpolate({
                      inputRange: [0, 2],
                      outputRange: [20, -20],
                    }),
                  },
                ],
              }}>
              <AntDesign
                style={{ marginTop: -40 }}
                name='pluscircle'
                size={50}
                color={focused ? 'red' : 'grey'}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name='settings'
        component={Settings}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Feather
              name='settings'
              size={24}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
