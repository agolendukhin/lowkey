/*
    Created by Artem Golendukhin
    on 08.05.2021:19:17
*/

import React, {useState} from 'react';
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

const QUESTION_LENGTH_LIMIT = 140;

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

const ModalHeader = ({navigation, editing}: any) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <CloseIcon />
    </TouchableOpacity>
    <Text style={styles.title}>New Poll</Text>
    <TouchableOpacity onPress={() => (editing ? navigation.goBack() : null)}>
      <Text style={[styles.create, {color: editing ? '#1C6EF2' : '#7E7A9A'}]}>
        Create
      </Text>
    </TouchableOpacity>
  </View>
);

const Question = ({value, setQuestionValue}) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Question</Text>
        <Text style={styles.label}>{value.length}/140</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Ask a question"
        placeholderTextColor="#7E7A9A"
        value={value}
        maxLength={QUESTION_LENGTH_LIMIT}
        onChangeText={setQuestionValue}
        multiline={true}
      />
    </View>
  );
};

const Options = ({options, setOptions}: any) => {
  const removeOption = id => {
    setOptions(options.filter(o => o.id !== id));
  };

  const addOption = () => {
    setOptions([
      ...options,
      {id: Math.max(...options.map(o => o.id)) + 1, text: ''},
    ]);
  };

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Options</Text>
        <Text style={styles.label}>{options.length}/8</Text>
      </View>
      {options.map(o => (
        <Option option={o} removeOption={removeOption} />
      ))}
      {options.length < 8 && (
        <TouchableOpacity onPress={() => addOption()}>
          <View style={styles.option}>
            <Text style={styles.addOptionText}>Add an option</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Option = ({option, removeOption}: any) => (
  <View style={styles.option}>
    <TextInput numberOfLines={1} style={styles.optionText}>
      {option.text}
    </TextInput>
    <TouchableOpacity
      style={styles.removeOption}
      onPress={() => removeOption(option.id)}>
      <CloseIcon />
    </TouchableOpacity>
  </View>
);

const Voting = ({value, setValue}) => (
  <View style={styles.votingContainer}>
    <View style={{flexDirection: 'row'}}>
      <UserSecretIcon />
      <Text style={styles.votingText}>Anonymous voting</Text>
    </View>
    <Switch
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      trackColor={{false: '#767577', true: blue}}
      value={value}
      onValueChange={setValue}
    />
  </View>
);

const MoreOptions = ({value, setValue}) => (
  <View style={styles.votingContainer}>
    <View style={{flexDirection: 'row'}}>
      <AddToListIcon />
      <Text style={[styles.votingText, {marginLeft: 12}]}>
        Ability to add more options
      </Text>
    </View>
    <Switch
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      trackColor={{false: '#767577', true: blue}}
      value={value}
      onValueChange={setValue}
    />
  </View>
);

const DEFAULT_OPTIONS = [
  {
    id: 1,
    text: 'Los Angeles Lakers',
  },
  {id: 2, text: 'Golden State Warriors'},
  {id: 3, text: 'Chicago Bulls'},
  {id: 4, text: 'Boston Celtics'},
];

const NewPoll = ({navigation}) => {
  const [questionValue, setQuestionValue] = useState('');
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [votingEnabled, setVotingEnabled] = useState(false);
  const [moreOptionsEnabled, setMoreOptionsEnabled] = useState(false);

  const isEditing = () => {
    if (questionValue !== '') {
      return true;
    }

    return false;
  };

  const editing = isEditing();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.gradientContainer}>
        <Gradient />
        <View style={styles.mainContainer}>
          <ModalHeader navigation={navigation} editing={editing} />
          <Question value={questionValue} setQuestionValue={setQuestionValue} />
          <Options options={options} setOptions={setOptions} />
          <Voting value={votingEnabled} setValue={setVotingEnabled} />
          <MoreOptions
            value={moreOptionsEnabled}
            setValue={setMoreOptionsEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default NewPoll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    minHeight: 50,
    backgroundColor: '#1C1A2A',
    borderRadius: 12,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
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
    flexShrink: 1,
    paddingRight: 15,
  },
  removeOption: {
    width: 50,
    height: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#1C233F',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
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
