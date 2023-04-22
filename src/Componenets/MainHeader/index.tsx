import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import Icons from '../../Theme/Icons';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../Utils/Responsive';
import CustomText from '../Common/Text';

type Props = {
  onClickLeftButton?: (...args: any[]) => any;
  onClickRightButton?: (...args: any[]) => any;
  title?: string;
  titleDescription?: string;
  bgColor?: string;
  headerStyle?: ViewStyle;
};

const MainHeader: React.FC<Props> = ({
  onClickLeftButton,
  onClickRightButton,
  title,
  headerStyle,
}) => {
  const navigation = useNavigation();
  const handleLeftOnClicked = () => {
    if (onClickLeftButton) {
      onClickLeftButton();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.leftChildren}>
        <TouchableOpacity style={styles.touch} onPress={handleLeftOnClicked}>
          <Image source={Icons.AndroidBack} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerChildren}>
        <CustomText text={title} style={styles.headerTitle} />
      </View>
      <View style={styles.rightChildren}>
        <TouchableOpacity style={styles.touch} onPress={onClickRightButton}>
          <Image source={Icons.More} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;
