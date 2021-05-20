/** @format */

import React, { useRef, useEffect } from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Dimensions } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
// import Signup from './Signup';

const windowWidth = Dimensions.get('window').width;
const Signup = ({ navigation }) => {
  const TextAnimation = useRef(new Animated.Value(0)).current;
  Animated.timing(TextAnimation, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode={'cover'}
      blurRadius={3}
      source={{
        uri:
          'https://images.unsplash.com/photo-1483652538034-f3a27d7a5ae2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      }}>
      <SafeAreaView style={{ flex: 1, marginTop: 90 }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: TextAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          }}>
          <Text style={styles.signUp}>Signup</Text>
        </Animated.View>
        <View style={styles.container}>
          <View style={styles.sectionStyle}>
            <AntDesign
              name='user'
              size={19}
              color='black'
              style={styles.username}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder='UserName'
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name='email'
              size={19}
              color='black'
              style={styles.username}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder='Email Adress'
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name='form-textbox-password'
              size={19}
              color='black'
              style={styles.username}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder='Enter Your Password'
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.sectionStyle}>
            <MaterialCommunityIcons
              name='form-textbox-password'
              size={19}
              color='black'
              style={styles.username}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder='Enter Your Password'
              underlineColorAndroid='transparent'
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={styles.reg}>
              <AntDesign
                name='adduser'
                size={24}
                color='rgba(60, 179, 113,0.8)'
              />
              <Text style={styles.first}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  signUp: {
    color: 'rgba(60, 179, 113,0.8)',
    width: windowWidth,
    textAlign: 'center',
    fontFamily: 'GoblinOne',
    paddingTop: 20,
    fontSize: 60,
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 15,
    margin: 10,
  },
  username: {
    padding: 5,
    margin: 4,
    height: 25,
    width: 25,
    // resizeMode: 'stretch',
    alignItems: 'center',
  },
  reg: {
    flexDirection: 'row',
    margin: 20,
  },
  first: {
    fontSize: 25,
    fontFamily: 'GoblinOne',
    margin: 3,
    color: 'white',
  },
});

export default Signup;
