import React from 'react';
import {View, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';

import styles from './styles';
import CustomText from '../Text';

export type WatButtonProps = {
  text: string;
  buttonStyle?: ViewStyle | ViewStyle[];
  onPress?: (data?: any) => any;
  textStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
  passiveStyle?: ViewStyle;
};
const CustomButton: React.FC<WatButtonProps> = ({
  text = '',
  buttonStyle,
  onPress,
  textStyle,
  disabled,
  passiveStyle,
  children,
}) => {
  const buttonStyles: any = !disabled
    ? [styles.button, styles.rowCenter]
    : [styles.button, styles.rowCenter, passiveStyle];

  return (
    <TouchableOpacity
      style={[buttonStyles, buttonStyle]}
      onPress={
        !disabled ? () => (onPress ? onPress() : () => null) : () => null
      }
      disabled={disabled}>
      {children ? (
        children
      ) : (
        <View style={[styles.fullSize]}>
          <CustomText style={[styles.text, textStyle]} text={text} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
