/** @format */

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import DATA from '../component/Data';

const { width, height } = Dimensions.get('window');
const CustomDrawerContent = ({ navigation }) => {
  const [handleshow, sethandleshow] = useState([]);
  const animateY = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(0);
  // 🤪 top menu
  const Topmenu = (
    <View style={{ width: width, height: height / 7 }}>
      <Feather
        style={{ margin: 30 }}
        name='arrow-left-circle'
        size={40}
        color='#7eca9c'
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />
      {/* scroll top menu */}
      <View
        style={{
          height: 400,
          left: 2,
          backgroundColor: 'rgba(21, 50, 115 ,0.3)',
          borderRadius: 20,
        }}>
        <Text
          style={{
            margin: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffffc7',
          }}>
          Scroll View
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}>
          {DATA.map((item, index) => (
            <TouchableOpacity onPress={() => console.log(index)}>
              <ImageBackground
                key={item.id}
                blurRadius={3}
                source={{ uri: item.img }}
                imageStyle={{ borderRadius: 30 }}
                style={{
                  width: 150,
                  height: 300,
                  margin: 10,
                }}>
                <Text
                  style={{
                    color: item.color,
                    textAlign: 'center',
                    fontFamily: 'GoblinOne',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginTop: 250,
                  }}>
                  {item.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
  // 🇪🇬

  const Downmenu = (
    <View
      style={{
        width: width,
        height: height,
      }}>
      <Feather
        style={{ left: 10 }}
        name='arrow-left-circle'
        size={30}
        color='#fff600'
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />
      <View style={{ left: '15%' }}>
        {DATA.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              console.log(item.id);
            }}>
            <Text style={{ color: item.color, marginTop: 10 }} key={index}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signin')}
        style={{ flexDirection: 'row', left: 60, top: 20 }}>
        <AntDesign name='logout' size={20} color='red' />
        <Text
          style={{
            fontWeight: 'bold',
            left: 3,
            color: 'rgb(236, 255, 128)',
          }}>
          Signout
        </Text>
      </TouchableOpacity>
    </View>
  );
  const AnimateonClick = () => {
    scaleValue.current = scaleValue.current === 0 ? 1 : 0;
    Animated.spring(animateY, {
      toValue: scaleValue.current,
      useNativeDriver: true,
    }).start();
    if (scaleValue.current === 1) {
      sethandleshow(handleshow === Topmenu);
    } else {
      sethandleshow(Downmenu);
    }
  };
  return (
    // Put background image
    <ImageBackground
      source={{
        uri:
          'https://images.unsplash.com/photo-1597148543182-830ef7bbb904?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2898&q=80',
      }}
      style={{
        width: width,
        height: height,
      }}
      blurRadius={50}
      // resizeMode='cover'
    >
      <View style={styles.Main}>
        {handleshow ? [Topmenu] : []}
        <Animated.View
          style={{
            backgroundColor: 'rgba(93, 125, 194 ,0.3)',
            height: height,
            width: width / 2,
            left: 100,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            marginTop: 500,
            transform: [
              {
                scale: animateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 2],
                }),
              },
            ],
          }}>
          <TouchableOpacity onPress={AnimateonClick}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/66387837?v=4',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          {handleshow ? [] : [Downmenu]}
        </Animated.View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  Main: {
    width: width,
    paddingTop: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    left: 40,
    marginTop: -40,
    margin: 10,
    borderRadius: 30,
  },
});

export default CustomDrawerContent;
