import React, {PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from '../../Utils/Responsive';

type Props = PropsWithChildren<any> & {
  scrollview?: boolean;
  safeArea?: boolean;
};

const Layout: React.FC<Props> = ({
  scrollview = false,
  safeArea = true,
  children,
}) => {
  const insets = useSafeAreaInsets();

  const newStyle = safeArea
    ? {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: scale(10),
      }
    : {};

  return (
    <View style={[styles.layout, newStyle]}>
      {scrollview ? (
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </View>
  );
};

export default Layout;
