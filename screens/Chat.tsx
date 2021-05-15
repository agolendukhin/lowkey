/*
    Created by Artem Golendukhin
    on 09.05.2021:13:21
*/

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {CloseIcon, MenuIcon, RecordIcon} from '../common/icons';
import {blue, gray, white} from '../common/colors';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import HighlightedText from '../common/HighlighedText';
import {EMesssageTypes, IMessage, IUser, MESSAGES, USERS} from '../mock';
import {getFullName} from '../common/utils';

const PollGradient: React.FC = ({height}) => (
  <LinearGradient
    useAngle={true}
    angle={134}
    angleCenter={{x: 0.15, y: 0.7}}
    colors={['#A83D7F', '#6F1D7A81', '#03114398', '#111135']}
    locations={[0.05, 0.1, 0.3, 1]}
    style={[styles.pollContainer, {height}]}
  />
);

interface PollProps {
  user: IUser;
  message: IMessage;
}

const Poll: React.FC<PollProps> = ({user, message}) => {
  const [gradientHeight, setGradientHeight] = useState<number>(0);
  const defaultQuestionHeight = 22;

  // used to calculate height of question container
  // to render properly height of gradient
  const onQuestionLayout = event => {
    const {height} = event.nativeEvent.layout;

    if (height > defaultQuestionHeight) {
      setGradientHeight(gradientHeight - defaultQuestionHeight + height);
    }
  };

  const getGradientHeight = (optionsLength: number) => {
    const pollHeaderHeight = 74;
    const questionBottomMargin = 12;
    const marginBetweenOptions = 8;
    const paddingBottom = 20;
    const optionHeight = 40;

    return (
      pollHeaderHeight +
      defaultQuestionHeight +
      questionBottomMargin +
      optionHeight * optionsLength +
      marginBetweenOptions * (optionsLength - 1) +
      paddingBottom
    );
  };

  useEffect(() => {
    const gHeight = getGradientHeight(4);
    setGradientHeight(gHeight);
  }, []);

  const fullName = getFullName(user);

  return (
    <View style={{position: 'relative', flex: 1, marginBottom: 15}}>
      <PollGradient height={gradientHeight} />
      <View
        style={{position: 'absolute', paddingHorizontal: 20, width: '100%'}}>
        <View style={styles.pollHeader}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image style={styles.pollAvatar} source={user.avatarSrc} />
            </TouchableOpacity>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Regular',
                  color: white,
                }}>
                {message?.poll?.private ? 'Private' : 'Public'} Poll
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-SemiBold',
                    color: white,
                  }}>
                  {fullName}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.votesCircle}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
                color: white,
              }}>
              {message?.poll?.votesCount}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: 'Poppins-Regular',
                color: white,
              }}>
              votes
            </Text>
          </View>
        </View>
        <Text style={styles.question} onLayout={onQuestionLayout}>
          {message?.poll?.question}
        </Text>
        <View style={styles.optionsContainer}>
          {message?.poll?.options.map(option => (
            <TouchableOpacity style={styles.option} key={option.id}>
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const MESSAGES_DUPLICATE = MESSAGES.map(m => ({...m, id: m.id + 20}));

const MESSAGES_MANY = [...MESSAGES, ...MESSAGES_DUPLICATE];

const MessageText: React.FC<{message: IMessage; users: IUser[]}> = ({
  message,
  users,
}) => {
  if (!message.mentionedUserIds) {
    return (
      <Text key={message.id} style={styles.messageText}>
        {message.text}
      </Text>
    );
  }

  const mentionedUserNicknames = users
    .filter(u => message?.mentionedUserIds.includes(u.id))
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

const Messages: React.FC = () => {
  return (
    <View style={styles.messagesContainer}>
      {MESSAGES_MANY.map(message => {
        const user = USERS.find(u => u.id === message.senderId);
        if (!user) return null;

        const fullName = getFullName(user);

        if (message.type === EMesssageTypes.text) {
          return (
            <View style={styles.message} key={message.id}>
              <TouchableOpacity>
                <Image style={styles.chatAvatar} source={user.avatarSrc} />
              </TouchableOpacity>
              <View style={{marginLeft: 15, paddingRight: 20}}>
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

export default () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const scrollRef = useRef();

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
    <View style={{flex: 1}}>
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
            source={require('../assets/images/avengers64.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          style={styles.chatContainer}
          ref={scrollRef}
          onContentSizeChange={() => {
            scrollRef.current.scrollToEnd({animated: true});
          }}>
          <Messages />
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={{paddingTop: 5}}>
            <MenuIcon />
          </TouchableOpacity>
          <View style={styles.messageInputContainer}>
            <TextInput
              style={styles.messageInput}
              placeholder="Message"
              placeholderTextColor={gray}
              value={message}
              onChangeText={setMessage}
              multiline={true}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 4}}>
            <RecordIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
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
  chatAvatar: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  pollAvatar: {
    height: 36,
    width: 36,
    borderRadius: 13,
  },
  closeIconContainer: {
    paddingTop: 4,
  },
  chatContainer: {
    backgroundColor: '#14131B', //black
    paddingHorizontal: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: '#14131B', //black
    paddingBottom: 35,
    paddingHorizontal: 20,
    paddingTop: 5,
    minHeight: 80,
    maxHeight: 240,
  },
  messageInputContainer: {
    flex: 1,
    minHeight: 30,
    backgroundColor: '#2E2C3C',
    borderRadius: 12,
    paddingLeft: 20,
    paddingTop: 3,
    paddingBottom: 10,
    paddingRight: 20,
    marginHorizontal: 10,
  },
  messageInput: {
    color: white,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  pollContainer: {
    flex: 1,
    backgroundColor: '#A83D7F',
    borderRadius: 18,
  },
  pollHeader: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  votesCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: -8,
    backgroundColor: '#AC1393',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: white,
    paddingRight: 5,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    backgroundColor: '#1C6EF20F',
    borderRadius: 15,
    height: 40,
    marginBottom: 8,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  optionText: {
    color: white,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  messagesContainer: {},
  message: {
    flexDirection: 'row',
    marginBottom: 13,
    paddingRight: 20,
  },
  messageText: {
    color: white,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    flex: 1,
    flexWrap: 'wrap',
  },
  sender: {
    color: '#7E7A9A',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  mentioned: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: blue,
    paddingBottom: 2,
    // marginTop: 2,
  },
});
