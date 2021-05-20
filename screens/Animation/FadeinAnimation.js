/** @format */

import React, { useRef } from 'react';
import { Animated } from 'react-native';

const FadeinAnimation = (props) => {
  const fadein = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadein, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadein]);
  return (
    <Animated.View style={{ ...props.style, opacity: fadein }}>
      {props.children}
    </Animated.View>
  );
};
export default FadeinAnimation;
