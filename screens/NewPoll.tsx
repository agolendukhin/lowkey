/*
    Created by Artem Golendukhin
    on 08.05.2021:19:17
*/

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {black, blue} from '../colors';
import {AddToListIcon, CloseIcon, UserSecretIcon} from '../icons';

const Header = () => <View style={{height: 64, backgroundColor: black}}></View>;

const Gradient = () => (
  <LinearGradient
    useAngle={true}
    angle={154}
    angleCenter={{x: 0, y: 0}}
    colors={['#2467F4', '#14131B']}
    style={styles.gradient}
  />
);

const ModalHeader = ({navigation}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <CloseIcon />
    </TouchableOpacity>
    <Text style={styles.title}>New Poll</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.create}>Create</Text>
    </TouchableOpacity>
  </View>
);

const Question = () => (
  <View>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>Question</Text>
      <Text style={styles.label}>0/140</Text>
    </View>
    <TextInput
      style={styles.input}
      placeholder="Ask a question"
      placeholderTextColor="#7E7A9A"
    />
  </View>
);

const Options = () => {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Options</Text>
        <Text style={styles.label}>0/8</Text>
      </View>
      <Option />
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.option}>
          <Text style={styles.addOptionText}>Add an option</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Option = () => (
  <View style={styles.option}>
    <TextInput style={styles.optionText}>Los Angeles Lakers</TextInput>
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.removeOption}>
        <CloseIcon />
      </View>
    </TouchableOpacity>
  </View>
);

const Voting = () => (
  <View style={styles.votingContainer}>
    <View style={{flexDirection: 'row'}}>
      <UserSecretIcon />
      <Text style={styles.votingText}>Anonymous voting</Text>
    </View>
    <Switch
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      trackColor={{false: '#767577', true: blue}}
      value={true}
    />
  </View>
);

const MoreOptions = () => (
  <View style={styles.votingContainer}>
    <View style={{flexDirection: 'row'}}>
      <AddToListIcon />
      <Text style={[styles.votingText, {marginLeft: 10}]}>
        Ability to add more options
      </Text>
    </View>
    <Switch
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      trackColor={{false: '#767577', true: blue}}
      value={true}
    />
  </View>
);

const NewPoll = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.gradientContainer}>
        <Gradient />
        <View style={styles.mainContainer}>
          <ModalHeader navigation={navigation} />
          <Question />
          <Options />
          <Voting />
          <MoreOptions />
        </View>
      </View>
    </View>
  );
};

export default NewPoll;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    backgroundColor: black,
    position: 'relative',
  },
  gradient: {
    flex: 1,
    opacity: 0.12,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  mainContainer: {
    position: 'absolute',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
    width: '100%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FEFEFE',
  },
  create: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#7E7A9A',
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#7E7A9A',
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#1C1A2A',
    borderRadius: 12,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingLeft: 20,
  },
  optionsContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  option: {
    height: 50,
    borderRadius: 15,
    backgroundColor: '#1C1A2A',
    paddingLeft: 15,
    marginBottom: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addOptionText: {
    color: '#1C6EF2',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingTop: 14,
  },
  optionText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  removeOption: {
    width: 50,
    height: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#1C233F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  votingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  votingText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 15,
  },
});
