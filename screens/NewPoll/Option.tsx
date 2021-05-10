/*
    Created by Artem Golendukhin
    on 10.05.2021:20:59
*/

import React, {useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {CloseIcon} from '../../common/icons';
import {darkBlue, white} from '../../common/colors';
import {commonStyles} from './styles';

export interface IOption {
  id: number;
  text: string;
}

interface OptionProps {
  option: IOption;
  updateOption: (newOption: IOption) => void;
  removeOption: (id: number) => void;
}

const Option: React.FC<OptionProps> = ({
  option,
  updateOption,
  removeOption,
}) => {
  const inputEl = useRef(null);

  return (
    <View
      style={commonStyles.option}
      // @ts-ignore
      onTouchStart={() => inputEl && inputEl.current.focus()}>
      <TextInput
        ref={inputEl}
        numberOfLines={1}
        style={styles.optionText}
        onChangeText={text => updateOption({...option, text})}>
        {option.text}
      </TextInput>
      <TouchableOpacity
        style={styles.removeOption}
        onPress={() => removeOption(option.id)}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  optionText: {
    color: white,
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
    backgroundColor: darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
