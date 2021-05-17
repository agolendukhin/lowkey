/*
    Created by Artem Golendukhin
    on 09.05.2021:13:21
*/

import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {black} from '../../common/colors';
import Footer from './Footer';
import Messages from './Messages';
import Header from './Header';

export default () => {
  const scrollRef = useRef();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <ScrollView
          style={styles.chatContainer}
          // @ts-ignore
          ref={scrollRef}
          onContentSizeChange={() => {
            // @ts-ignore
            scrollRef.current.scrollToEnd({animated: true});
          }}>
          <Messages />
        </ScrollView>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: black,
    paddingHorizontal: 15,
  },
});
