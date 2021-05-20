/** @format */

import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';

import DATA from '../component/Data';
const Plus = ({ navigation }) => {
  const onPress = () => {
    return navigation.toggleDrawer();
  };
  return (
    <SafeAreaView style={styles.containter}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0,0.1)',
          borderRadius: 20,
          margin: 10,
        }}>
        <TouchableOpacity onPress={onPress} style={styles.avatarsection}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/66387837?v=4',
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        {DATA.map((item) => (
          <View
            key={item.id}
            style={{
              flex: 1,
            }}>
            <ImageBackground
              blurRadius={5}
              key={item.indexx}
              source={{ uri: item.img }}
              style={{ margin: 20 }}
              imageStyle={{
                borderTopRightRadius: 80,
                borderBottomLeftRadius: 80,
              }}>
              <Text
                key={item.titlex}
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'GoblinOne',
                  fontSize: 15,
                  paddingTop: 20,
                  color: item.color,
                }}>
                {item.title}
              </Text>
              <Text
                key={item.index}
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'GoblinOne',
                  margin: 10,
                  color: 'white',
                  paddingTop: 30,
                }}>
                {item.describtion}
              </Text>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containter: {
    paddingTop: 40,
    flex: 1,
    margin: 5,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },

  avatarsection: {
    margin: 10,
    width: 50,
    height: 50,
    flexDirection: 'row',
  },
});
export default Plus;
