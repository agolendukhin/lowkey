/*
    Created by Artem Golendukhin
    on 17.05.2021:09:41
*/

import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CloseIcon} from '../../common/icons';
import React from 'react';
import {CHAT_DATA, MESSAGES, USERS} from '../../common/mock';
import {useNavigation} from '@react-navigation/native';
import {darkPurple, gray, white} from '../../common/colors';
import {IMessage} from '../../common/types';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const countMembers = (messages: IMessage[]) => {
    const members = messages.reduce((acc, curr) => {
      const isUserOnline = USERS.find(u => u.id === curr.senderId)?.online;
      // @ts-ignore
      acc[curr.senderId] = isUserOnline;
      return acc;
    }, {});

    return {
      total: Object.keys(members).length,
      online: Object.values(members).filter(online => online).length,
    };
  };

  const {total: totalMembers, online} = countMembers(MESSAGES);

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={darkPurple} />
      <View style={styles.headerContainer}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon size={26} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.title}>Lowkey Squad</Text>
          </TouchableOpacity>
          <Text style={styles.online}>
            {totalMembers} members • {online} online
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            // @ts-ignore
            style={styles.groupAvatar}
            source={CHAT_DATA.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    backgroundColor: darkPurple,
    height: Platform.OS === 'ios' ? 88 : 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 46 : 23,
    paddingLeft: 20,
    paddingRight: 20,
  },
  closeIconContainer: {
    paddingTop: 4,
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
});
