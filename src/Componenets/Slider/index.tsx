import {View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import styles from './styles';
import CustomText from '../Common/Text';
import COLORS from '../../Theme/Colors';

type Props = {
  minimumValue: number;
  maximumValue: number;
  label?: string;
  setSliderValue: (...params) => void;
  sliderValue: number;
  step: number;
};

const CustomSlider: React.FC<Props> = ({
  minimumValue,
  maximumValue,
  label,
  sliderValue,
  setSliderValue,
  step,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <CustomText text={`${label}`} style={styles.label} />

        <View style={styles.ratioContaner}>
          <CustomText text={`${minimumValue}`} style={styles.ratio} />
          <CustomText text={`/`} style={styles.ratio} />
          <CustomText text={`${maximumValue}`} style={styles.ratio} />
        </View>
      </View>

      {/*
      // slider doğru çalışmıyor daha sonra tekrar bak
      <Slider
        style={styles.slider}
        minimumValue={sliderValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={COLORS.prograssColor}
        maximumTrackTintColor={COLORS.black}
        value={sliderValue}
        onValueChange={value => setSliderValue(value)}
        step={step}
      />
        */}
    </View>
  );
};

export default CustomSlider;
