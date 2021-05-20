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
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import FadeinAnimation from './Animation/FadeinAnimation';

const Signin = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode={'cover'}
      blurRadius={3}
      source={{
        uri:
          'https://images.unsplash.com/photo-1483652538034-f3a27d7a5ae2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      }}>
      <FadeinAnimation>
        <Text style={styles.signIn}>Login</Text>
      </FadeinAnimation>
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
            placeholder='Enter Your UserName'
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
            <AntDesign name='login' size={24} color='green' />
            <Text style={styles.first}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.reg}>
            <Ionicons name='create' size={24} color='rgba(255, 0, 0,0.5)' />
            <Text style={styles.first}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
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
  signIn: {
    paddingTop: 170,
    fontSize: 70,
    fontFamily: 'GoblinOne',
    textAlign: 'center',
    color: 'rgba(60, 179, 113,0.8)',
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
    alignItems: 'center',
  },
  reg: {
    flexDirection: 'row',
    margin: 20,
  },
  first: {
    fontSize: 16,
    fontFamily: 'GoblinOne',
    margin: 4,
    color: 'white',
  },
});

export default Signin;
