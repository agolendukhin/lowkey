import React from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntIcon from 'react-native-vector-icons/Entypo';

interface CloseIconProps {
  size?: number;
}
export const CloseIcon = ({size}: CloseIconProps) => (
  <ADIcon name="close" size={size || 22} color="white" />
);

export const UserSecretIcon = () => (
  <FAIcon name="user-secret" size={20} color="white" />
);

export const RecordIcon = () => (
  <MCIcon name="record-circle-outline" size={22} color="white" />
);

export const AddToListIcon = () => (
  <EntIcon name="add-to-list" size={20} color="white" />
);

export const MenuIcon = () => (
  <ADIcon name="appstore1" size={30} color="white" />
);
