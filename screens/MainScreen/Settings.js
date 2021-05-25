/** @format */

import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import DATA from '../component/Data';
import AddPost from '../component/Addpost';

const Settings = ({ navigation }) => {
  const [Topic, setTopic] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/articles')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((response) => {
        setTopic(response);

        // console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* view for test text input */}

      <AddPost
        addPost={(values) => {
          return console.log(values.title), console.log(values.content);
        }}
      />

      {/*  */}
      <ScrollView showsVerticalScrollIndicator>
        {/* gathered */}
        {Topic.map((item, id) => (
          <View
            style={{
              margin: 30,
              backgroundColor: item.color,
              padding: 15,
              borderRadius: 10,
            }}>
            <Text style={{ textAlign: 'center' }}>{id}</Text>
            <Text style={{ textAlign: 'center' }}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        ))}

        {/* colored mapped from const DATA */}
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
      </ScrollView>
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
