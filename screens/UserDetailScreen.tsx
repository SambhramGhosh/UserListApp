import React from 'react';
import { View, Text, Image } from 'react-native';
import { useAppSelector } from '../store/hooks';

export const UserDetailScreen = ({ route }: any) => {
  const { id } = route.params;

  const user = useAppSelector(state =>
    state.users.users.find(u => u.login.uuid === id)
  );

  if (!user) return null;

  return (
    <View style={{ padding: 16 }}>
      <Image source={{ uri: user.picture.large }} style={{ width: 150, height: 150 }} />
      <Text>{user.name.first} {user.name.last}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
    </View>
  );
};
