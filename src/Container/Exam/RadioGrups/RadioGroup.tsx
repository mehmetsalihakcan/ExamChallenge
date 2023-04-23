import React from 'react';
import {View} from 'react-native';
import {RadioGroupProps} from './types';
import RadioButton from './RadioButton';

const RadioGroup = (props: RadioGroupProps) => {
  const {items, selected, onSelected} = props;

  return (
    <View>
      {items.map((item, index) => (
        <RadioButton
          key={index}
          item={item}
          selected={selected}
          onSelected={onSelected}
        />
      ))}
    </View>
  );
};

export default RadioGroup;
