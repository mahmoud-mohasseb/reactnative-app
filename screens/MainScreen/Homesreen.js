/** @format */

import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Towers from '../component/towers';

const { width, height } = Dimensions.get('window');
const Homescreen = ({ navigation }) => {
  return (
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
      {/* Header */}
      <SafeAreaView style={styles.header}>
        <View style={styles.home}>
          <AntDesign
            style={styles.homeicon}
            name='home'
            size={24}
            color='black'
          />
        </View>

        <View style={{ width: 30, height: 30, left: 23, top: -20 }}>
          <Ionicons
            name='reorder-two-outline'
            size={30}
            color='white'
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
      </SafeAreaView>

      {/* Body */}
      <ScrollView style={{ top: 30 }}>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Towers</Text>
          <Text>Towers Made for busniesses </Text>
        </View>
        <View style={{ width: width, height: 330 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ top: 50, width: width, height: 100 }}>
            {Towers.map((item, index) => (
              <View
                style={{
                  width: 120,
                  height: 230,
                  backgroundColor: 'rgba(0, 0, 0,0.3)',
                  margin: 20,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 180,
                    left: 10,
                    top: -30,
                  }}
                  source={{ uri: item.img }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'rgba(50, 96, 168 ,0.90)',
                  }}>
                  {item.price}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                    top: 3,
                  }}>
                  {item.title.toUpperCase()}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* second */}
        <View style={{ left: 10 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'rgba(50, 168, 109 ,0.5)',
            }}>
            Busniesses
          </Text>
          <Text>Towers Made for busniesses </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ top: 50, width: width, height: 250 }}>
            {Towers.map((item, index) => (
              <View
                style={{
                  width: 120,
                  height: 230,
                  backgroundColor: 'rgba(0, 0, 0,0.3)',
                  margin: 20,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 180,
                    left: 10,
                    top: -30,
                  }}
                  source={{ uri: item.img }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'rgba(50, 96, 168 ,0.90)',
                  }}>
                  {item.price}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                    top: 3,
                  }}>
                  {item.title.toUpperCase()}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* third exmaples */}
        <View style={{ left: 10, top: 70 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'rgba(50, 168, 109 ,0.5)',
            }}>
            Busniesses
          </Text>
          <Text>Towers Made for busniesses </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ top: 50, width: width, height: 350 }}>
            {Towers.map((item, index) => (
              <View
                style={{
                  width: 120,
                  height: 230,
                  backgroundColor: 'rgba(0, 0, 0,0.3)',
                  margin: 20,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 180,
                    left: 10,
                    top: -30,
                  }}
                  source={{ uri: item.img }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'rgba(50, 96, 168 ,0.90)',
                  }}>
                  {item.price}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                    top: 3,
                  }}>
                  {item.title.toUpperCase()}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    // top: 50,
    // flex: 1,
  },
  home: {
    left: 30,
    top: 15,
    backgroundColor: 'white',
    width: 40,
    height: 50,
    marginLeft: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 70,
  },
  homeicon: {
    textAlign: 'center',
    margin: 7,
  },
});
export default Homescreen;
