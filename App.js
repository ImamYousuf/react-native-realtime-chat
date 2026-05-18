import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';
import {ChatProvider} from './src/store/ChatContext';
import {colors} from './src/theme/colors';

export default function App() {
  return (
    <ChatProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        <RootNavigator />
      </NavigationContainer>
    </ChatProvider>
  );
}
