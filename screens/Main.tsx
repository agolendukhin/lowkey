/*
    Created by Artem Golendukhin
    on 08.05.2021:19:16
*/

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {black, blue} from '../common/colors';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: black,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{height: '100%'}}
        style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: black,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('NewPoll')}>
            <Text
              style={{
                color: blue,
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
                marginBottom: 20,
              }}>
              Create a new poll
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Text
              style={{
                color: blue,
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
              }}>
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
