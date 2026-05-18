import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routes} from '../constants/routes';
import ChatListScreen from '../screens/ChatListScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen component={ChatListScreen} name={routes.chatList} />
    <Stack.Screen component={ChatRoomScreen} name={routes.chatRoom} />
    <Stack.Screen component={UserProfileScreen} name={routes.userProfile} />
  </Stack.Navigator>
);

export default RootNavigator;
