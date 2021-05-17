/*
    Created by Artem Golendukhin
    on 17.05.2021:09:39
*/

import React from 'react';
import {IMessage, IUser} from '../../common/types';
import {StyleSheet, Text} from 'react-native';
import HighlightedText from '../../common/HighlighedText';
import {blue, white} from '../../common/colors';

interface MessageTextProps {
  message: IMessage;
  users: IUser[];
}

const MessageText: React.FC<MessageTextProps> = ({message, users}) => {
  if (!message.mentionedUserIds) {
    return (
      <Text key={message.id} style={styles.messageText}>
        {message.text}
      </Text>
    );
  }

  const mentionedUserNicknames = users
    .filter(u => message?.mentionedUserIds?.includes(u.id))
    .map(u => '@' + u.nickName);

  return (
    // @ts-ignore
    <HighlightedText
      key={message.id}
      highlightStyle={styles.mentioned}
      style={styles.messageText}
      searchWords={mentionedUserNicknames}
      textToHighlight={message.text}
      onPress={(text: string) => {
        // handle @mentioned clicked
        console.log(text);
      }}
    />
  );
};

export default MessageText;

const styles = StyleSheet.create({
  messageText: {
    color: white,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    flex: 1,
    flexWrap: 'wrap',
  },
  mentioned: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: blue,
    paddingBottom: 2,
  },
});
