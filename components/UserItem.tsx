import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '../types/user';

interface Props {
  user: User;
  onPress: () => void;
}

export const UserItem: React.FC<Props> = ({ user, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={{ uri: user.picture.thumbnail }} style={styles.image} />
      <Text>{user.name.first} {user.name.last}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
});
