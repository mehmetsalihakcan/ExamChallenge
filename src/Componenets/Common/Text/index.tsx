import React from 'react';
import {Text, TextProps} from 'react-native';

import styles from './styles';

interface Props extends TextProps {
  text?: number | string;
  numberOfLinesPrm?: number | null;
}

const CustomText: React.FC<Props> = ({
  text = '',
  children,
  style,
  numberOfLines,
  ...props
}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]} {...props}>
      {children}
      {`${text}`}
    </Text>
  );
};

export default CustomText;
