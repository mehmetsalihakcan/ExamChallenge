import {StyleSheet} from 'react-native';
import {normalize, scale, verticalScale} from '../../Utils/Responsive';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.headerBackground,
  },
  slider: {
    height: verticalScale(40),
    marginHorizontal: scale(15),
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  label: {
    lineHeight: normalize(17.76),
    fontSize: normalize(13),
    marginHorizontal: scale(15),
    color: COLORS.white,
  },

  ratioContaner: {
    flexDirection: 'row',
    marginHorizontal: scale(15),
  },
  ratio: {
    flexDirection: 'row',

    lineHeight: normalize(17.76),
    fontSize: normalize(13),
    color: COLORS.prograssColor,
  },
});

export default styles;
