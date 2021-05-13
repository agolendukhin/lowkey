/*
    Created by Artem Golendukhin
    on 09.05.2021:13:21
*/

import React, {useEffect, useState} from 'react';
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
import {black, blue, darkPurple, gray, white} from '../common/colors';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {MESSAGES} from '../mock';

const PollGradient: React.FC = ({height}) => (
  <LinearGradient
    useAngle={true}
    angle={134}
    angleCenter={{x: 0.15, y: 0.7}}
    colors={['#A83D7F', '#6F1D7A81', '#03114398', '#111135']}
    locations={[0.01, 0.05, 0.5, 1]}
    style={[styles.pollContainer, {height}]}
  />
);

const Poll: React.FC = () => {
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

  return (
    <View style={{position: 'relative', flex: 1, marginTop: 20}}>
      <PollGradient height={gradientHeight}></PollGradient>
      <View
        style={{position: 'absolute', paddingHorizontal: 20, width: '100%'}}>
        <View style={styles.pollHeader}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.pollAvatar}
              source={require('../assets/images/scarletwitch.png')}
            />
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
                Public Poll
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-SemiBold',
                  color: white,
                }}>
                Wanda Maximoff
              </Text>
            </View>
          </View>
          <View style={styles.votesCircle}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
                color: white,
              }}>
              0
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
          What is the greatest NBA team in the history?
        </Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Iron Man</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Thor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Jessica Jones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Dr.Strange</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Messages: React.FC = () => {
  // return <Text style={styles.message}>Hello</Text>;
  return (
    <View style={styles.messagesContainer}>
      {MESSAGES.map(message => (
        <View style={styles.message}>
          <Image
            style={styles.chatAvatar}
            source={require('../assets/images/scarletwitch.png')}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={styles.sender}>Anthony Stark</Text>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon size={26} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Lowkey Squad</Text>
          <Text style={styles.online}>7 members • 1 online</Text>
        </View>
        <Image
          // @ts-ignore
          style={styles.groupAvatar}
          source={require('../assets/images/avengers64.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <ScrollView style={styles.chatContainer}>
          <Messages></Messages>
          <Poll />
        </ScrollView>
        <View style={styles.footerContainer}>
          <MenuIcon />
          <TextInput
            style={styles.messageInput}
            placeholder="Message"
            placeholderTextColor={gray}
            value={message}
            onChangeText={setMessage}
            multiline={true}
          />
          <RecordIcon />
        </View>
      </View>
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
    paddingBottom: 40,
    height: 80,
  },
  messageInput: {
    flex: 1,
    minHeight: 30,
    backgroundColor: darkPurple,
    borderRadius: 12,
    color: white,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingLeft: 20,
    paddingVertical: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  pollContainer: {
    flex: 1,
    // height: 334,
    backgroundColor: '#A83D7F',
    borderRadius: 18,
  },
  pollHeader: {
    paddingVertical: 20,
    // width: '100%',
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
  messagesContainer: {
    paddingRight: 20,
  },
  message: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  messageText: {
    color: white,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  sender: {
    color: '#7E7A9A',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
});
