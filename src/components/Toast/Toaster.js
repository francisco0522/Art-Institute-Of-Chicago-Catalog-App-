import React from 'react';
import {View, Text} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';

export const Toaster = props => {
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={{
        width: '50%',
        backgroundColor: '#c41c1ccc',
        position: 'absolute',
        padding: 10,
        alignItems: 'center',
        left: '25%',
        right: 20,
        borderRadius: 8,
      }}>
      <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
        {props.data == 0 ? 'Artwork saved!' : 'Artwork removed!'}
      </Text>
    </Animated.View>
  );
};
