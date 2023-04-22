import {StyleSheet} from 'react-native';
import COLORS from '../../Theme/Colors';
import {normalize, scale, verticalScale} from '../../Utils/Responsive';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    width: '100%',
    backgroundColor: COLORS.headerBackground,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftChildren: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  centerChildren: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  rightChildren: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    width: scale(20),
    height: scale(20),
    margin: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(10),
    backgroundColor: COLORS.shadowColor,
    margin: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: normalize(18),
    color: COLORS.white,
    fontWeight: '700',
    lineHeight: normalize(24),
  },
});
export default styles;
