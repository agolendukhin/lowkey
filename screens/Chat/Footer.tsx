/*
    Created by Artem Golendukhin
    on 17.05.2021:09:40
*/

import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MenuIcon, RecordIcon} from '../../common/icons';
import {black, darkGray, gray, white} from '../../common/colors';
import React, {useState} from 'react';

const Footer: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.menuIconContainer}>
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
      <TouchableOpacity style={styles.recordIconContainer}>
        <RecordIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: black,
    paddingBottom: 35,
    paddingHorizontal: 20,
    paddingTop: 10,
    minHeight: 80,
    maxHeight: 240,
    // android fix
    marginTop: -1,
  },
  messageInputContainer: {
    flex: 1,
    backgroundColor: darkGray,
    borderRadius: 12,
    paddingLeft: 20,
    paddingBottom: 4,
    marginHorizontal: 10,
  },
  messageInput: {
    color: white,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingBottom: 0,
    paddingTop: Platform.OS === 'ios' ? 5 : 4,
  },
  menuIconContainer: {
    paddingTop: 5,
  },
  recordIconContainer: {
    paddingTop: 1,
  },
});
