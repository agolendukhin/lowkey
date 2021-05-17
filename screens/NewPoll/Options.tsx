/*
    Created by Artem Golendukhin
    on 10.05.2021:20:57
*/

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Option from './Option';
import {blue} from '../../common/colors';
import {commonStyles} from './styles';
import {IOption} from '../../common/types';

interface OptionsProps {
  options: IOption[];
  setOptions: (options: IOption[]) => void;
}

const Options: React.FC<OptionsProps> = ({options, setOptions}) => {
  const removeOption = (id: number) => {
    setOptions(options.filter(o => o.id !== id));
  };

  const addOption = () => {
    const hasEmpty = options.some(o => o.text === '');

    if (!hasEmpty) {
      setOptions([
        ...options,
        {
          id: makeUniqueId(options),
          text: '',
        },
      ]);
    }
  };

  const makeUniqueId = (opts: IOption[]) => {
    return opts.length ? Math.max(...opts.map(o => o.id)) + 1 : 1;
  };

  const updateOption = (newOption: IOption) => {
    setOptions(options.map(o => (o.id === newOption.id ? newOption : o)));
  };

  return (
    <View style={styles.optionsContainer}>
      <View style={commonStyles.labelContainer}>
        <Text style={commonStyles.label}>Options</Text>
        <Text style={commonStyles.label}>{options.length}/8</Text>
      </View>
      {options.map(o => (
        <Option
          option={o}
          key={o.id}
          updateOption={updateOption}
          removeOption={removeOption}
        />
      ))}
      {options.length < 8 && (
        <TouchableOpacity onPress={() => addOption()}>
          <View style={commonStyles.option}>
            <Text style={styles.addOptionText}>Add an option</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  addOptionText: {
    color: blue,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingTop: 14,
  },
});
