// @flow
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default ({...rest}: Object) => (
  <View
    style={{
      marginTop: 5,
      width: 17,
      height: 1,
      backgroundColor: '#608ACB',
    }}
    {...rest}
  />
);
