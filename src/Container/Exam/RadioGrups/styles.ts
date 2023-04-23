import {StyleSheet} from 'react-native';
import COLORS from '../../../Theme/Colors';
import {normalize, scale} from '../../../Utils/Responsive';

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
    marginVertical: scale(10),
    padding: scale(12),
    borderRadius: scale(10),
  },
  button: {
    height: scale(20),
    width: scale(20),
    borderRadius: scale(24),
    borderWidth: scale(2),
    borderColor: COLORS.boldText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    width: scale(14),
    height: scale(14),
    borderRadius: scale(14),
  },
  itemDescription: {
    textAlign: 'center',
    lineHeight: normalize(14.32),
    fontSize: normalize(12),
    fontWeight: '400',
    color: COLORS.description,
    marginHorizontal: scale(4),
  },
  solutionVideoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(153),
    height: scale(40),
    borderRadius: scale(6),
    marginVertical: scale(12),
    backgroundColor: COLORS.success,
  },
  solutionVideoText: {
    textAlign: 'center',
    lineHeight: normalize(19.12),
    fontSize: normalize(14),
    fontWeight: '700',
    color: COLORS.white,
    marginHorizontal: scale(4),
  },
  playButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(20),
    width: scale(20),
    borderRadius: scale(10),

    backgroundColor: COLORS.white,
  },
});

export default styles;
