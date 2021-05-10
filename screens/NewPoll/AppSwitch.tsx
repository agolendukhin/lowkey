/*
    Created by Artem Golendukhin
    on 10.05.2021:21:00
*/

import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {blue, white} from '../../common/colors';

interface AppSwitchProps {
  Icon: Element;
  value: boolean;
  setValue: (value: boolean) => void;
  text: string;
  textStyles?: object;
}

const AppSwitch: React.FC<AppSwitchProps> = ({
  Icon,
  value,
  setValue,
  text,
  textStyles = {},
}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      {Icon}
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </View>
    <Switch
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      trackColor={{false: white, true: blue}}
      value={value}
      onValueChange={setValue}
    />
  </View>
);

export default AppSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  text: {
    color: white,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 15,
  },
});
