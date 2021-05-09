/*
    Created by Artem Golendukhin
    on 08.05.2021:19:17
*/

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {black, blue} from '../colors';

const Header = () => <View style={{height: 64, backgroundColor: black}}></View>;

export default () => {
  return (
    <View style={{flex: 1}}>
      <Header></Header>
      <View style={styles.gradientContainer}>
        <LinearGradient
          useAngle={true}
          angle={154}
          angleCenter={{x: 0, y: 0}}
          colors={['#2467F4', '#14131B']}
          style={styles.gradient}></LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    backgroundColor: black,
  },
  gradient: {
    flex: 1,
    opacity: 0.12,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
