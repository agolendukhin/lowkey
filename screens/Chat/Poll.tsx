/*
    Created by Artem Golendukhin
    on 17.05.2021:09:33
*/

import {IMessage, IUser} from '../../common/types';
import React, {useEffect, useState} from 'react';
import {getFullName} from '../../common/utils';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blue, magenta, violetEggplant, white} from '../../common/colors';
import LinearGradient from 'react-native-linear-gradient';

interface PollGradientProps {
  height: number;
}

const PollGradient: React.FC<PollGradientProps> = ({height}) => (
  <LinearGradient
    useAngle={true}
    angle={134}
    angleCenter={{x: 0.15, y: 0.7}}
    colors={[magenta, '#6F1D7A81', '#03114398', '#111135']}
    locations={[0.05, 0.1, 0.3, 1]}
    style={[styles.gradient, {height}]}
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
  const onQuestionLayout = (event: any) => {
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
    const gHeight = getGradientHeight(message?.poll?.options?.length as number);
    setGradientHeight(gHeight);
  }, [message?.poll?.options?.length]);

  const fullName = getFullName(user);

  return (
    <View style={styles.pollContainer}>
      <PollGradient height={gradientHeight} />
      <View style={styles.pollViewContainer}>
        <View style={styles.pollHeader}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              {/*
                // @ts-ignore */}
              <Image style={styles.pollAvatar} source={user.avatarSrc} />
            </TouchableOpacity>
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text style={styles.publicPollText}>
                {message?.poll?.private ? 'Private' : 'Public'} Poll
              </Text>
              <TouchableOpacity>
                <Text style={styles.nameText}>{fullName}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.votesCircle}>
            <Text style={styles.votesCountText}>
              {message?.poll?.votesCount}
            </Text>
            <Text style={styles.votesText}>votes</Text>
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

export default Poll;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pollContainer: {
    position: 'relative',
    flex: 1,
    marginBottom: 15,
  },
  pollViewContainer: {
    position: 'absolute',
    paddingHorizontal: 20,
    width: '100%',
  },
  pollHeader: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pollAvatar: {
    height: 36,
    width: 36,
    borderRadius: 13,
  },
  votesCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: -8,
    backgroundColor: violetEggplant,
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
    backgroundColor: blue + '0F',
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
  gradient: {
    flex: 1,
    backgroundColor: magenta,
    borderRadius: 18,
  },
  publicPollText: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: white,
  },
  nameText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: white,
  },
  votesCountText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: white,
  },
  votesText: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: white,
  },
});
