import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const referenceHeight = 544;
const referenceWidth = 375;

const scale = (size: number) => (SCREEN_WIDTH / referenceWidth) * size;
const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / referenceHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor: number = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const moderateCenterWidth = (size: number, factor: number = 0.5) => {
  let s = size + (scale(size) - size) * factor;
  let w = SCREEN_WIDTH + (scale(SCREEN_WIDTH) - SCREEN_WIDTH) * factor;
  return (w - s) / 2;
};

const moderateCenterHeight = (size: number, factor: number = 0.5) => {
  let s = size + (scale(size) - size) * factor;
  let w = SCREEN_HEIGHT + (scale(SCREEN_HEIGHT) - SCREEN_HEIGHT) * factor;
  return (w - s) / 2;
};

const scaleNormalize = SCREEN_WIDTH / 320;

const normalize = (size: any) => {
  const newSize = size * scaleNormalize;
  const FontSize = PixelRatio.getFontScale();
  if (Platform.OS === 'ios') {
    if (FontSize > 1.118 || FontSize <= 0.882) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) / FontSize;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
  } else {
    if (FontSize > 1.11 || FontSize < 0.88) {
      return (
        (Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2) / FontSize
      );
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
};

export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  moderateCenterWidth,
  moderateCenterHeight,
  normalize,
};
