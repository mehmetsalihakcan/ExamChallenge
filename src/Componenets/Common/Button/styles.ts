import {StyleSheet} from 'react-native';
import {normalize, scale} from '../../../Utils/Responsive';
import Colors from '../../../Theme/Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.headerBackground,
    height: scale(50),
    borderRadius: scale(10),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  text: {
    color: Colors.white,
    fontSize: normalize(16),
  },
  fullSize: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
