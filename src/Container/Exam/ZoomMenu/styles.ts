import {StyleSheet} from 'react-native';
import COLORS from '../../../Theme/Colors';
import {normalize, scale} from '../../../Utils/Responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: scale(15),
  },
  questionInfo: {
    flex: 2,
    width: scale(116),
    height: scale(40),
    backgroundColor: COLORS.boldText,
    borderRadius: scale(8),
    padding: scale(10),
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(40),
    height: scale(40),
    backgroundColor: COLORS.itemColor,
    borderRadius: scale(10),
    marginHorizontal: scale(5),
  },
  settingsContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  label: {
    lineHeight: normalize(16.36),
    fontWeight: '800',
    fontSize: normalize(12),
    color: COLORS.white,
    alignSelf: 'center',
  },
});

export default styles;
