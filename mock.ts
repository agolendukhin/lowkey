/*
    Created by Artem Golendukhin
    on 13.05.2021:20:28
*/

interface IUser {
  id: number;
  avatarSrc: string;
  firstName: string;
  lastName: string;
  nickName: string;
}

interface IMessage {
  id: number;
  chatId: number;
  senderId: number;
  type: EMesssageTypes;
  text?: string;
  poll?: IPoll;
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
    avatarSrc: '../assets/images/ironman.png',
    firstName: 'Anthony',
    lastName: 'Stark',
    nickName: 'ironman',
  },
  {
    id: 2,
    avatarSrc: '../assets/images/thor.png',
    firstName: 'Thor',
    lastName: 'Odinson',
    nickName: 'thor',
  },
  {
    id: 3,
    avatarSrc: '../assets/images/drstrange.png',
    firstName: 'Steven',
    lastName: 'Strange',
    nickName: 'drstrange',
  },
  {
    id: 4,
    avatarSrc: '../assets/images/captainmarvel.png',
    firstName: 'Carol',
    lastName: 'Danvers',
    nickName: 'captainmarvel',
  },
  {
    id: 5,
    avatarSrc: '../assets/images/jjones.png',
    firstName: 'Jessica',
    lastName: 'Jones',
    nickName: 'jjones',
  },
  {
    id: 6,
    avatarSrc: '../assets/images/storm.png',
    firstName: 'Ororo',
    lastName: 'Munroe',
    nickName: 'storm',
  },
  {
    id: 7,
    avatarSrc: '../assets/images/scarletwitch.png',
    firstName: 'Wanda',
    lastName: 'Maximoff',
    nickName: 'scarletwitch',
  },
];

enum EMesssageTypes {
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
    text: 'It looks like Christmas. Only with more...me.',
    type: EMesssageTypes.text,
    timestamp: 1620919414717,
  },
  {
    id: 3,
    chatId: 1,
    senderId: 2,
    text: 'It looks like Christmas. Only with more...me.',
    type: EMesssageTypes.text,
    timestamp: 1620919414718,
  },
  {
    id: 4,
    chatId: 1,
    senderId: 4,
    text: "[In Russian] Do you really think I'm pretty?",
    type: EMesssageTypes.text,
    timestamp: 1620919414719,
  },
  {
    id: 5,
    chatId: 1,
    senderId: 5,
    text: "[In Russian] Do you really think I'm pretty?",
    type: EMesssageTypes.text,
    timestamp: 1620919414720,
  },
  {
    id: 6,
    chatId: 1,
    senderId: 6,
    text: "I've got red in my ledger. I'd like to wipe it out",
    type: EMesssageTypes.text,
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
