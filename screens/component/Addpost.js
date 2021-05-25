/** @format */

import React from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';

const AddPost = (props) => {
  const handleoOnsubmit = (values, actions) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var details = {
      title: values.title,
      content: values.content,
      color: '#' + randomColor,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      console.log(encodedKey);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:9000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // console.log(values);
    actions.resetForm();
    props.addPost(values);
  };

  // const deleteNote = (id) => {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };

  return (
    <Formik
      initialValues={{ title: '', content: '' }}
      onSubmit={handleoOnsubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ left: 20, height: 100, margin: 20 }}>
          <TextInput
            style={{ margin: 10 }}
            placeholder='title'
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          <TextInput
            style={{ margin: 10 }}
            placeholder='content'
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            value={values.content}
          />
          {/* <View>
            <AntDesign
              onpress={deleteNote}
              name='delete'
              size={24}
              color='black'
            />
          </View> */}
          <View style={{ left: 120 }}>
            <TouchableOpacity
              style={{
                margin: 10,
                backgroundColor: '#fc5404',
                width: 50,
                height: 20,
                borderRadius: 10,
              }}
              onPress={handleSubmit}
              title='Submit'>
              <Text style={{ textAlign: 'center' }}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default AddPost;
