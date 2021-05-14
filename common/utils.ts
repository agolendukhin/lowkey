/*
    Created by Artem Golendukhin
    on 14.05.2021:19:49
*/

import {IUser} from '../mock';

export const getFullName = (user: IUser) =>
  [user.firstName, user.lastName].filter(s => s).join(' ');
