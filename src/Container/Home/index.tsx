import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import ScreenNames from '../../Config/ScreenNames';
import {Layout} from '../../Layout';
import CustomText from '../../Componenets/Common/Text';
import CustomButton from '../../Componenets/Common/Button';

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.content}>
        <CustomText text="Onlie sınava hoş geldiniz." style={styles.welcome} />
      </View>
      <View style={styles.footer}>
        <CustomButton
          text="Sınava Başla"
          onPress={() => navigation.navigate(ScreenNames.EXAM_SCREEN)}
        />
      </View>
    </Layout>
  );
};

export default Home;
