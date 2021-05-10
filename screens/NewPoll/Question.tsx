/*
    Created by Artem Golendukhin
    on 10.05.2021:20:57
*/

import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {darkPurple, gray, white} from '../../common/colors';
import {commonStyles} from './styles';

const QUESTION_LENGTH_LIMIT = 140;

interface QuestionProps {
  value: string;
  setQuestionValue: (value: string) => void;
}

const Question: React.FC<QuestionProps> = ({value, setQuestionValue}) => {
  return (
    <View>
      <View style={commonStyles.labelContainer}>
        <Text style={commonStyles.label}>Question</Text>
        <Text style={commonStyles.label}>{value.length}/140</Text>
      </View>
      <TextInput
        style={styles.questionInput}
        placeholder="Ask a question"
        placeholderTextColor={gray}
        value={value}
        maxLength={QUESTION_LENGTH_LIMIT}
        onChangeText={setQuestionValue}
        multiline={true}
      />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  questionInput: {
    minHeight: 50,
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
  },
});
