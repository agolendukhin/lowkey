/*
    Created by Artem Golendukhin
    on 13.05.2021:20:28
*/

import {IMessage, IUser} from './types';

export const USERS: IUser[] = [
  {
    id: 1,
    avatarSrc: require('../assets/images/ironman.png'),
    firstName: 'Anthony',
    lastName: 'Stark',
    nickName: 'ironman',
    online: true,
  },
  {
    id: 2,
    avatarSrc: require('../assets/images/thor.png'),
    firstName: 'Thor',
    lastName: 'Odinson',
    nickName: 'thor',
    online: false,
  },
  {
    id: 3,
    avatarSrc: require('../assets/images/drstrange.png'),
    firstName: 'Steven',
    lastName: 'Strange',
    nickName: 'drstrange',
    online: false,
  },
  {
    id: 4,
    avatarSrc: require('../assets/images/captainmarvel.png'),
    firstName: 'Carol',
    lastName: 'Danvers',
    nickName: 'captainmarvel',
    online: false,
  },
  {
    id: 5,
    avatarSrc: require('../assets/images/jjones.png'),
    firstName: 'Jessica',
    lastName: 'Jones',
    nickName: 'jjones',
    online: false,
  },
  {
    id: 6,
    avatarSrc: require('../assets/images/storm.png'),
    firstName: 'Ororo',
    lastName: 'Munroe',
    nickName: 'storm',
    online: false,
  },
  {
    id: 7,
    avatarSrc: require('../assets/images/scarletwitch.png'),
    firstName: 'Wanda',
    lastName: 'Maximoff',
    nickName: 'scarletwitch',
    online: false,
  },
];

export enum EMesssageTypes {
  text,
  poll,
}

export const MESSAGES: IMessage[] = [
  {
    id: 1,
    chatId: 1,
    senderId: 1,
    text:
      'I know I said no more surprises, but I gotta say, I was really hoping to pull off one last one',
    type: EMesssageTypes.text,
    timestamp: 1620919414716,
  },
  {
    id: 2,
    chatId: 1,
    senderId: 2,
    text: "I don't judge people by their worst mistakes",
    type: EMesssageTypes.text,
    timestamp: 1620919414717,
  },
  {
    id: 8,
    chatId: 1,
    senderId: 7,
    type: EMesssageTypes.poll,
    timestamp: 1620919414722,
    poll: {
      private: false,
      votesCount: 3,
      question: 'Who is the most brave avenger in the world?',
      options: [
        {
          id: 1,
          text: 'Iron man',
        },
        {
          id: 2,
          text: 'Thor',
        },
        {
          id: 3,
          text: 'Captain Marvel',
        },
        {
          id: 4,
          text: 'Jessica Jones',
        },
        {
          id: 5,
          text: 'Dr.Strange',
        },
        {
          id: 6,
          text: 'Storm',
        },
        {
          id: 7,
          text: 'Scarlet Witch',
        },
      ],
    },
  },
  {
    id: 3,
    chatId: 1,
    senderId: 3,
    text: 'It looks like Christmas. Only with more...me.',
    type: EMesssageTypes.text,
    timestamp: 1620919414718,
  },
  {
    id: 4,
    chatId: 1,
    senderId: 4,
    text: 'Some people move on, but not us',
    type: EMesssageTypes.text,
    timestamp: 1620919414719,
  },
  {
    id: 5,
    chatId: 1,
    senderId: 5,
    text: "@thor do you really think I'm pretty?",
    mentionedUserIds: [2],
    type: EMesssageTypes.text,
    timestamp: 1620919414720,
  },
  {
    id: 6,
    chatId: 1,
    senderId: 6,
    text: "@ironman I've got red in my ledger. I'd like to wipe it out.",
    type: EMesssageTypes.text,
    mentionedUserIds: [1],
    timestamp: 1620919414721,
  },
  {
    id: 7,
    chatId: 1,
    senderId: 7,
    type: EMesssageTypes.poll,
    timestamp: 1620919414722,
    poll: {
      private: false,
      votesCount: 7,
      question: 'Who is the topmost avenger in the world?',
      options: [
        {
          id: 1,
          text: 'Iron man',
        },
        {
          id: 2,
          text: 'Thor',
        },
        {
          id: 3,
          text: 'Captain Marvel',
        },
        {
          id: 4,
          text: 'Jessica Jones',
        },
      ],
    },
  },
];

export const CHAT_DATA = {
  id: 1,
  title: 'Lowkey squad',
  avatar: require('../assets/images/avengers64.png'),
};

export const DEFAULT_OPTIONS = [
  {
    id: 1,
    text: 'Thor',
  },
  {id: 2, text: 'Iron man'},
  {id: 3, text: 'Dr.Strange'},
  {id: 4, text: 'Storm'},
];
