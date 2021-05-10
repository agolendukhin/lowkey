/*
    Created by Artem Golendukhin
    on 10.05.2021:21:23
*/

import {StyleSheet} from 'react-native';
import {darkPurple, gray} from '../../common/colors';

export const commonStyles = StyleSheet.create({
  option: {
    height: 50,
    borderRadius: 15,
    backgroundColor: darkPurple,
    paddingLeft: 15,
    marginBottom: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: gray,
    marginBottom: 10,
  },
});
