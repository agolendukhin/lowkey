/*
    Created by Artem Golendukhin
    on 10.05.2021:20:57
*/

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CloseIcon} from '../../common/icons';
import {blue, gray, white} from '../../common/colors';

const ModalHeader: React.FC<{editing: boolean}> = ({editing}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CloseIcon />
      </TouchableOpacity>
      <Text style={styles.title}>New Poll</Text>
      <TouchableOpacity onPress={() => (editing ? navigation.goBack() : null)}>
        <Text style={[styles.create, {color: editing ? blue : gray}]}>
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: white,
  },
  create: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
