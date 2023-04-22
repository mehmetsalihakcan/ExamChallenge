import {StyleSheet} from 'react-native';
import {scale} from '../../../Utils/Responsive';
import COLORS from '../../../Theme/Colors';

const styles = StyleSheet.create({
  option: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.white,
    borderRadius: scale(10),
    shadowColor: COLORS.optionShadow,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 3,
    padding: scale(10),
    marginVertical: scale(4),
  },
});
export default styles;
