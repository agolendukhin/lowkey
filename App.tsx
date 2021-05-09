/*
    Created by Artem Golendukhin
    on 08.05.2021:19:16
*/

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/Main';
import NewPoll from './screens/NewPoll';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NewPoll" component={NewPoll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
