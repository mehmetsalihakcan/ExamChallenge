import React from 'react';
import {Modal, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import CustomText from '../../../Componenets/Common/Text';
import COLORS from '../../../Theme/Colors';
import Icons from '../../../Theme/Icons';
import {itemKeys, modalItems} from './constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../../Config/ScreenNames';
import {scale} from '../../../Utils/Responsive';

type Props = {
  modalVisible: boolean;
  setModalVisible: (params: boolean) => void;
};

const CustomModal: React.FC<Props> = ({modalVisible, setModalVisible}) => {
  const insets = useSafeAreaInsets();
  const navigaiton = useNavigation();

  const handleItemPress = (key: string) => {
    switch (key) {
      case itemKeys.ANSWER_KEY:
        setModalVisible(!modalVisible);
        navigaiton.navigate(ScreenNames.ANSWER_KEY_SCREEN);
        break;

      case itemKeys.SHOW_ANSWER:
        setModalVisible(!modalVisible);
        navigaiton.navigate(ScreenNames.SHOW_ANSWER_SCREEN);
        break;

      case itemKeys.REPORT_ISSUE:
        setModalVisible(!modalVisible);
        navigaiton.navigate(ScreenNames.REPORT_ISSUE_SCREEN);
        break;

      case itemKeys.FINISH_TEST:
        setModalVisible(!modalVisible);
        navigaiton.navigate(ScreenNames.FINISH_TEST_SCREEN);
        break;

      case itemKeys.GIVE_UP:
        setModalVisible(!modalVisible);
        break;

      default:
        setModalVisible(!modalVisible);
        break;
    }
  };

  const borderStyle = (key: string) => {
    let previousStyle = {marginVertical: key === itemKeys.GIVE_UP ? 10 : 0};
    switch (key) {
      case itemKeys.ANSWER_KEY:
        return {
          ...previousStyle,
          borderTopStartRadius: scale(10),
          borderTopEndRadius: scale(10),
        };

      case itemKeys.FINISH_TEST:
        return {
          ...previousStyle,
          borderBottomEndRadius: scale(10),
          borderBottomStartRadius: scale(10),
        };

      case itemKeys.GIVE_UP:
        return {
          ...previousStyle,
          borderRadius: scale(10),
        };

      default:
        return {
          ...previousStyle,
          borderRadius: scale(0),
        };
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleItemPress(item.key)}
        style={[styles.item, borderStyle(item.key)]}>
        <CustomText
          text={item.title}
          style={[
            styles.itemTitle,
            {color: item.type === 'error' ? COLORS.error : COLORS.blueTitle},
          ]}
        />

        {item.description && (
          <View style={styles.iconContainer}>
            {item.descriptionIcon && <Image source={Icons.Info} />}
            <CustomText
              text={item.description}
              style={[styles.itemDescription]}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.centeredView}
        />
        <FlatList
          data={modalItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={[styles.flatlist, {marginBottom: insets.bottom}]}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          scrollEnabled={false}
        />
      </View>
    </Modal>
  );
};

export default CustomModal;
