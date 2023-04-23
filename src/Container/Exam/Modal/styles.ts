import {StyleSheet} from 'react-native';
import COLORS from '../../../Theme/Colors';
import {normalize, scale} from '../../../Utils/Responsive';

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    opacity: 0.35,
  },
  modalView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
  },
  item: {
    height: scale(61),
    marginHorizontal: scale(10),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    textAlign: 'center',
    lineHeight: normalize(21.48),
    fontSize: normalize(18),
    fontWeight: '400',
  },
  itemDescription: {
    textAlign: 'center',
    lineHeight: normalize(14.32),
    fontSize: normalize(12),
    fontWeight: '400',
    color: COLORS.description,
    marginHorizontal: scale(4),
  },
  flatlist: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  itemSeperator: {
    height: scale(1),
    marginHorizontal: scale(10),
    backgroundColor: COLORS.description,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
