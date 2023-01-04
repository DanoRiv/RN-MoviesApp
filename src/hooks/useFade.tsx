import { Animated } from 'react-native';
import { useRef } from 'react';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  const fadeIn = (callback?: () => void) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start( ()=> callback ? callback() : null );
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }
    ).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
  };

};
