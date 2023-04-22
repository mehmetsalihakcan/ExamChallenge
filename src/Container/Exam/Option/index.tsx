import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Option = props => {
  return <View style={styles.option}>{props.children}</View>;
};

export default Option;
