import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {MainHeader, Slider} from '../../Componenets';
import CustomText from '../../Componenets/Common/Text';
import {Layout} from '../../Layout';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icons from '../../Theme/Icons';
import ZoomMenu from './ZoomMenu';
import Modal from './Modal';

type Props = {
  navigation: any;
  route?: any;
};

import RadioGroup from '../../Componenets/RadioGrups/RadioGroup';
import {useRecoilState} from 'recoil';
import {questionList} from '../../Store/atom';
import {Item} from '../../Componenets/RadioGrups/types';

const Exam: React.FC<Props> = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [modalVisisble, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<Item>();
  const [questionListData, setQuestionList] = useRecoilState(questionList);

  const onClickRightButton = () => {
    setModalVisible(true);
  };

  const handlePrevious = () => {
    if (questionNumber !== 0) {
      setQuestionNumber(questionNumber => questionNumber - 1);
    }
  };

  const handleNext = () => {
    if (!selected) {
      return false;
    }

    if (questionListData.length - 1 > questionNumber) {
      setQuestionNumber(value => value + 1);
    }
  };

  const onSelected = (item: Item) => {
    console.log('seçilen : ', item);
    console.log('seçilen : ', questionNumber);
    // {"boldWord": "boşboğaz", "id": 5, "key": "E", "name": "E) Ağzında bakla ıslanmayan boşboğaz adamın tekiydi o.", "selected": true}

    setSelected(item);
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
        maximumValue={questionListData.length}
        setSliderValue={setQuestionNumber}
        sliderValue={questionNumber}
        step={1}
      />
      <Layout scrollview>
        <ZoomMenu
          questionNumber={questionNumber + 1}
          category={questionListData[questionNumber]?.category}
        />
        <CustomText
          text={questionListData[questionNumber].questionDescription}
          style={styles.questionDescription}
        />
        <CustomText
          text={questionListData[questionNumber].question}
          style={styles.question}
        />

        {selected && selected.name && (
          <CustomText text={selected.name} style={styles.questionDescription} />
        )}

        <RadioGroup
          selected={selected}
          onSelected={onSelected}
          items={questionListData[questionNumber].answerOptions}
        />
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
