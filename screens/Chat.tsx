/*
    Created by Artem Golendukhin
    on 09.05.2021:13:21
*/

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CloseIcon} from '../common/icons';
import {gray, white} from '../common/colors';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon size={26} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Lowkey Squad</Text>
          <Text style={styles.online}>1 member • 1 online</Text>
        </View>
        <Image
          style={styles.groupAvatar}
          source={require('../assets/images/avengers64.png')}
        />
      </View>
      <Text>Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1C1A2A',
    height: 88,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 46,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: white,
  },
  online: {
    color: gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  groupAvatar: {
    height: 35,
    width: 35,
    borderRadius: 10,
  },
  closeIconContainer: {
    paddingTop: 4,
  },
});
