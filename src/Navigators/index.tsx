import * as React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ExamScreen,
  AnswerKeyScreen,
  ShowAnswerScreen,
  ReportIssueScreen,
  FinishTestScreen,
} from '../Container';

import ScreenNames from '../Config/ScreenNames';
import {StatusBar, useColorScheme} from 'react-native';

export default function Navigators() {
  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  const navContainerRef = createNavigationContainerRef<any>();

  return (
    <NavigationContainer ref={navContainerRef}>
      <StatusBar translucent backgroundColor="transparent" />
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Stack.Navigator
        initialRouteName={ScreenNames.EXAM_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.EXAM_SCREEN} component={ExamScreen} />

        <Stack.Screen
          name={ScreenNames.ANSWER_KEY_SCREEN}
          component={AnswerKeyScreen}
        />
        <Stack.Screen
          name={ScreenNames.SHOW_ANSWER_SCREEN}
          component={ShowAnswerScreen}
        />
        <Stack.Screen
          name={ScreenNames.REPORT_ISSUE_SCREEN}
          component={ReportIssueScreen}
        />
        <Stack.Screen
          name={ScreenNames.FINISH_TEST_SCREEN}
          component={FinishTestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
