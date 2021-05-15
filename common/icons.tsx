import React from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntIcon from 'react-native-vector-icons/Entypo';

interface IconProps {
  size?: number;
}

export const CloseIcon = ({size}: IconProps) => (
  <ADIcon name="close" size={size || 22} color="white" />
);

export const UserSecretIcon = ({size}: IconProps) => (
  <FAIcon name="user-secret" size={size || 20} color="white" />
);

export const RecordIcon = ({size}: IconProps) => (
  <MCIcon name="record-circle-outline" size={size || 30} color="white" />
);

export const AddToListIcon = ({size}: IconProps) => (
  <EntIcon name="add-to-list" size={size || 20} color="white" />
);

export const MenuIcon = ({size}: IconProps) => (
  <ADIcon name="appstore1" size={size || 26} color="white" />
);
