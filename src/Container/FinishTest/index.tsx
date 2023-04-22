import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Layout} from '../../Layout';
import CustomText from '../../Componenets/Common/Text';
import CustomButton from '../../Componenets/Common/Button';

type Props = {
  navigation: any;
};

const FinishTest: React.FC<Props> = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.content}>
        <CustomText text="FinishTest" style={styles.welcome} />
      </View>
      <View style={styles.footer}>
        <CustomButton text="Geri Git" onPress={() => navigation.goBack()} />
      </View>
    </Layout>
  );
};

export default FinishTest;
