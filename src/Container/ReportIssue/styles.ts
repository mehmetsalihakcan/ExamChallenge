import {StyleSheet} from 'react-native';
import {normalize, scale} from '../../Utils/Responsive';
import COLORS from '../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: COLORS.headerBackground,
    height: scale(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
  },
  footer: {
    alignSelf: 'center',
    width: '100%',
    position: 'absolute',
    bottom: scale(10),
  },
  welcome: {
    fontSize: normalize(18),
    fontWeight: '500',
  },
});

export default styles;
