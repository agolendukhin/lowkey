/*
    Created by Artem Golendukhin
    on 14.05.2021:20:42
*/
// @ts-nocheck

// based on https://github.com/clauderic/react-native-highlight-words/blob/master/index.js

import React from 'react';
import {Text} from 'react-native';
import {findAll} from 'highlight-words-core';

/**
 * Highlights all occurrences of search terms (searchText) within a string (textToHighlight).
 * This function returns an array of strings and <Text> elements (wrapping highlighted words).
 */
// @ts-ignore-start
export default function HighlightedText({
  autoEscape,
  highlightStyle,
  searchWords,
  textToHighlight,
  sanitize,
  style,
  onPress,
  ...props
}) {
  const chunks = findAll({textToHighlight, searchWords, sanitize, autoEscape});

  return (
    <Text style={style} {...props}>
      {chunks.map((chunk, index) => {
        const text = textToHighlight.substr(
          chunk.start,
          chunk.end - chunk.start,
        );

        return !chunk.highlight ? (
          text
        ) : (
          <Text
            key={index}
            style={chunk.highlight && highlightStyle}
            onPress={() => onPress(text)}>
            {text}
          </Text>
        );
      })}
    </Text>
  );
}
