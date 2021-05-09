/*
    Created by Artem Golendukhin
    on 08.05.2021:19:16
*/

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/Main';
import NewPollScreen from './screens/NewPoll';
import ChatScreen from './screens/Chat';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="NewPoll"
          component={NewPollScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
