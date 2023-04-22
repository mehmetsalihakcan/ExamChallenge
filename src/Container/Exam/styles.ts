import {StyleSheet} from 'react-native';
import {normalize, scale, verticalScale} from '../../Utils/Responsive';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: COLORS.error,
    height: verticalScale(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    bottom: 0,
    height: verticalScale(70),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  nextIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.nextBackground,
    borderRadius: scale(10),
    width: scale(140),
    paddingVertical: verticalScale(15),
    marginHorizontal: scale(10),
  },

  previousIcon: {
    width: scale(4.5),
    height: verticalScale(9),
    marginLeft: scale(16.75),
  },
  previousText: {
    fontSize: normalize(14),
    lineHeight: normalize(19.12),
    fontWeight: '800',
  },

  nextText: {
    fontSize: normalize(14),
    lineHeight: normalize(19.12),
    fontWeight: '800',
    marginRight: scale(5),
    marginLeft: scale(18),
  },

  nextIcon: {
    width: scale(4.5),
    height: verticalScale(9),
    marginRight: scale(16.75),
    marginLeft: scale(12),
  },

  question: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontWeight: '700',
    marginBottom: verticalScale(25),
  },
  questionDescription: {
    fontSize: normalize(14),
    lineHeight: normalize(19.12),
    fontWeight: '400',
    marginBottom: verticalScale(15),
  },
});

export default styles;
