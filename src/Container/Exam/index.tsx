import {Alert, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {MainHeader, Slider} from '../../Componenets';
import Option from './Option';
import CustomText from '../../Componenets/Common/Text';
import {Layout} from '../../Layout';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icons from '../../Theme/Icons';
import Questions from './Data';
import ZoomMenu from './ZoomMenu';
import Modal from './Modal';

type Props = {
  navigation: any;
  route?: any;
};

const Exam: React.FC<Props> = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [modalVisisble, setModalVisible] = useState(false);
  const onClickRightButton = () => {
    setModalVisible(true);
  };

  const handlePrevious = () => {
    if (questionNumber !== 0) {
      setQuestionNumber(questionNumber => questionNumber - 1);
    }
  };

  const handleNext = () => {
    if (Questions.length - 1 > questionNumber) {
      setQuestionNumber(questionNumber => questionNumber + 1);
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader
        title="Sözcükte Anlam"
        onClickRightButton={onClickRightButton}
        headerStyle={{paddingTop: insets.top}}
      />
      <Slider
        label="Konu Tarama Testi"
        minimumValue={questionNumber + 1}
        maximumValue={Questions.length}
        setSliderValue={setQuestionNumber}
        sliderValue={questionNumber}
        step={1}
      />
      <Layout scrollview>
        <ZoomMenu
          questionNumber={questionNumber + 1}
          category={Questions[questionNumber]?.category}
        />
        <CustomText
          text={Questions[questionNumber].questionDescription}
          style={styles.questionDescription}
        />
        <CustomText
          text={Questions[questionNumber].question}
          style={styles.question}
        />

        {Questions[questionNumber].answerOptions.map((question, index) => (
          <Option key={index}>
            <CustomText text={question.option} />
          </Option>
        ))}
      </Layout>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handlePrevious}
          style={styles.nextIconContainer}>
          <Image source={Icons.IosBack} style={styles.previousIcon} />
          <CustomText text="Önceki Soru" style={styles.previousText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.nextIconContainer}>
          <CustomText text="Sonraki Soru" style={styles.nextText} />
          <Image source={Icons.IsForward} style={styles.nextIcon} />
        </TouchableOpacity>
      </View>
      <Modal setModalVisible={setModalVisible} modalVisible={modalVisisble} />
    </View>
  );
};

export default Exam;
