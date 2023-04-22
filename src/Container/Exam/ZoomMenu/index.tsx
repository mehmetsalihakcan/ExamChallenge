import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icons from '../../../Theme/Icons';
import CustomText from '../../../Componenets/Common/Text';

type Props = {
  questionNumber: number;
  category: string;
};

const ZoomMenu: React.FC<Props> = ({questionNumber, category}) => {
  return (
    <View style={styles.container}>
      <View style={styles.questionInfo}>
        <CustomText
          text={`Soru : ${category} : ${questionNumber}`}
          style={styles.label}
        />
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.item}>
          <Image source={Icons.Edit} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={Icons.Plus} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image source={Icons.Minus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ZoomMenu;
