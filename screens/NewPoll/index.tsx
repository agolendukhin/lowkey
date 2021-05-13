/*
    Created by Artem Golendukhin
    on 08.05.2021:19:17
*/

import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ModalHeader from './ModalHeader';
import Question from './Question';
import AppSwitch from './AppSwitch';
import Options from './Options';
import {black, blue} from '../../common/colors';
import {AddToListIcon, UserSecretIcon} from '../../common/icons';

const DEFAULT_OPTIONS = [
  {
    id: 1,
    text: 'Los Angeles Lakers',
  },
  {id: 2, text: 'Golden State Warriors'},
  {id: 3, text: 'Chicago Bulls'},
  {id: 4, text: 'Boston Celtics'},
];
const DEFAULT_INITIAL_VALUES = {
  options: DEFAULT_OPTIONS,
  questionValue: '',
  votingEnabled: false,
  moreOptionsEnabled: false,
};
const DEFAULT_INITIAL_VALUES_STR = JSON.stringify(DEFAULT_INITIAL_VALUES);

const Header: React.FC = () => <View style={styles.header} />;

const Gradient: React.FC = () => (
  <LinearGradient
    useAngle={true}
    angle={154}
    angleCenter={{x: 0, y: 0}}
    colors={[blue, black]}
    style={styles.gradient}
  />
);

const NewPoll: React.FC = () => {
  const [questionValue, setQuestionValue] = useState(
    DEFAULT_INITIAL_VALUES.questionValue,
  );
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [votingEnabled, setVotingEnabled] = useState(
    DEFAULT_INITIAL_VALUES.votingEnabled,
  );
  const [moreOptionsEnabled, setMoreOptionsEnabled] = useState(
    DEFAULT_INITIAL_VALUES.moreOptionsEnabled,
  );

  const isEditing = () => {
    if (questionValue.length === 0 || options.length === 0) {
      return false;
    }
    if (options.length === 1 && !options[0].text) {
      return false;
    }

    const currentValues = {
      options,
      questionValue,
      votingEnabled,
      moreOptionsEnabled,
    };

    return JSON.stringify(currentValues) !== DEFAULT_INITIAL_VALUES_STR;
  };

  const editing = isEditing();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.gradientContainer}>
        <Gradient />
        <ScrollView style={styles.mainContainer} contentInset={{bottom: 80}}>
          <ModalHeader editing={editing} />
          <Question value={questionValue} setQuestionValue={setQuestionValue} />
          <Options options={options} setOptions={setOptions} />
          <AppSwitch
            Icon={<UserSecretIcon />}
            value={votingEnabled}
            setValue={setVotingEnabled}
            text="Anonymous voting"
          />
          <AppSwitch
            Icon={<AddToListIcon />}
            value={moreOptionsEnabled}
            setValue={setMoreOptionsEnabled}
            text="Ability to add more options"
            textStyles={{
              marginLeft: 12,
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default NewPoll;

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: black,
  },
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
});
