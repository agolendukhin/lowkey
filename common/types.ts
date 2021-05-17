/*
    Created by Artem Golendukhin
    on 17.05.2021:17:47
*/

import {EMesssageTypes} from './mock';

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

export interface IOption {
  id: number;
  text: string;
}

export interface IPoll {
  private: boolean;
  votesCount: number;
  question: string;
  options: IOption[];
}

export interface IOption {
  id: number;
  text: string;
}
