/** @format */

import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import DATA from '../component/Data';

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {DATA.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: item.color,
            margin: 30,
            height: 30,
            borderRadius: 10,
          }}>
          <Text
            key={item.id}
            style={{ textAlign: 'center', top: 5, fontWeight: 'bold' }}>
            {item.title.toUpperCase()}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
  },
});
export default Settings;
