/*
    Created by Artem Golendukhin
    on 17.05.2021:09:39
*/

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EMesssageTypes, MESSAGES, USERS} from '../../common/mock';
import {getFullName} from '../../common/utils';
import MessageText from './MessageText';
import Poll from './Poll';
import {gray} from '../../common/colors';

const Messages: React.FC = () => {
  return (
    <View style={styles.messagesContainer}>
      {MESSAGES.map(message => {
        const user = USERS.find(u => u.id === message.senderId);
        if (!user) return null;

        const fullName = getFullName(user);

        if (message.type === EMesssageTypes.text) {
          return (
            <View style={styles.message} key={message.id}>
              <TouchableOpacity>
                {/*
                // @ts-ignore */}
                <Image style={styles.chatAvatar} source={user.avatarSrc} />
              </TouchableOpacity>
              <View style={styles.nameContainer}>
                <TouchableOpacity>
                  <Text style={styles.sender}>{fullName}</Text>
                </TouchableOpacity>
                <MessageText message={message} users={USERS} />
              </View>
            </View>
          );
        } else {
          return <Poll user={user} message={message} key={message.id} />;
        }
      })}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  messagesContainer: {},
  message: {
    flexDirection: 'row',
    marginBottom: 13,
    paddingRight: 20,
  },
  chatAvatar: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  sender: {
    color: gray,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  nameContainer: {
    marginLeft: 15,
    paddingRight: 20,
  },
});
