import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {RadioButtonProps} from './types';
import CustomText from '../../../Componenets/Common/Text';
import COLORS from '../../../Theme/Colors';
import Icons from '../../../Theme/Icons';
import styles from './styles';

const RadioButton = (props: RadioButtonProps) => {
  const {item, selected, onSelected} = props;

  let viewBackground = {};
  let textStyle = {};
  let radioInStyle = {};
  let radioOutStyle = {};

  if (selected?.id === item.id) {
    viewBackground = selected.selected
      ? {
          backgroundColor: COLORS.successBackground,
          borderWidth: 1,
          borderColor: COLORS.success,
        }
      : {
          backgroundColor: COLORS.error,
        };

    textStyle = selected.selected
      ? {
          color: COLORS.success,
        }
      : {
          color: COLORS.white,
        };

    radioInStyle = selected.selected
      ? {backgroundColor: COLORS.success}
      : {backgroundColor: COLORS.white};

    radioOutStyle = selected.selected
      ? {borderColor: COLORS.success}
      : {borderColor: COLORS.white};
  }

  return (
    <TouchableOpacity
      style={[styles.radioButton, viewBackground]}
      onPress={() => onSelected(item)}>
      <View style={[styles.button, radioOutStyle]}>
        {selected?.id === item.id && (
          <View style={[styles.selectedButton, radioInStyle]} />
        )}
      </View>

      <View>
        <CustomText
          text={item.name}
          style={[styles.itemDescription, textStyle]}
        />

        {selected?.id === item.id && selected.selected && (
          <View style={styles.solutionVideoContainer}>
            <View style={styles.playButtonContainer}>
              <Image source={Icons.Play} />
            </View>
            <CustomText
              text="Çözüm Videosu"
              style={[styles.solutionVideoText]}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
