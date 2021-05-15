/*
    Created by Artem Golendukhin
    on 13.05.2021:20:28
*/

export interface IUser {
  id: number;
  avatarSrc: string;
  firstName: string;
  lastName: string;
  nickName: string;
  online: boolean;
}

export interface IMessage {
  id: number;
  chatId: number;
  senderId: number;
  type: EMesssageTypes;
  text?: string;
  poll?: IPoll;
  // mentionedUserIds could be extracted when a user sends a message with mentioned nicknames
  mentionedUserIds?: number[];
  timestamp: number;
}

interface IOption {
  id: number;
  text: string;
}

interface IPoll {
  private: boolean;
  votesCount: number;
  question: string;
  options: IOption[];
}

export const USERS: IUser[] = [
  {
    id: 1,
    avatarSrc: require('./assets/images/ironman.png'),
    firstName: 'Anthony',
    lastName: 'Stark',
    nickName: 'ironman',
    online: true,
  },
  {
    id: 2,
    avatarSrc: require('./assets/images/thor.png'),
    firstName: 'Thor',
    lastName: 'Odinson',
    nickName: 'thor',
    online: false,
  },
  {
    id: 3,
    avatarSrc: require('./assets/images/drstrange.png'),
    firstName: 'Steven',
    lastName: 'Strange',
    nickName: 'drstrange',
    online: false,
  },
  {
    id: 4,
    avatarSrc: require('./assets/images/captainmarvel.png'),
    firstName: 'Carol',
    lastName: 'Danvers',
    nickName: 'captainmarvel',
    online: false,
  },
  {
    id: 5,
    avatarSrc: require('./assets/images/jjones.png'),
    firstName: 'Jessica',
    lastName: 'Jones',
    nickName: 'jjones',
    online: false,
  },
  {
    id: 6,
    avatarSrc: require('./assets/images/storm.png'),
    firstName: 'Ororo',
    lastName: 'Munroe',
    nickName: 'storm',
    online: false,
  },
  {
    id: 7,
    avatarSrc: require('./assets/images/scarletwitch.png'),
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
    text: 'Have you ever had shawarma?',
    type: EMesssageTypes.text,
    timestamp: 1620919414716,
  },
  {
    id: 2,
    chatId: 1,
    senderId: 2,
    text: 'It looks like Christmas. Only with more...me. Long Long Long',
    type: EMesssageTypes.text,
    timestamp: 1620919414717,
  },
  {
    id: 3,
    chatId: 1,
    senderId: 3,
    text: 'It looks like Christmas. Only with more...me. Long Long Long',
    type: EMesssageTypes.text,
    timestamp: 1620919414718,
  },
  {
    id: 4,
    chatId: 1,
    senderId: 4,
    text:
      "[In Russian] Do you really think I'm pretty? Long Long Long.[In Russian] Do you really think I'm pretty? Long Long Long.[In Russian] Do you really think I'm pretty? Long Long Long.[In Russian] Do you really think I'm pretty? Long Long Long.[In Russian] Do you really think I'm pretty? Long Long Long.[In Russian] Do you really think I'm pretty? Long Long Long",
    type: EMesssageTypes.text,
    timestamp: 1620919414719,
  },
  {
    id: 5,
    chatId: 1,
    senderId: 5,
    text: "[In Russian] @thor do you really think I'm pretty? Long Long Long",
    mentionedUserIds: [2],
    type: EMesssageTypes.text,
    timestamp: 1620919414720,
  },
  {
    id: 6,
    chatId: 1,
    senderId: 6,
    text:
      "@ironman I've got red in my ledger. I'd like to wipe it out. Long Long Long",
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
      question: 'Who is the topmost avenger in the world? Long Long Long',
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
