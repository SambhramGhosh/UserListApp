import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <TextInput
    style={styles.input}
    placeholder="Search users"
    value={value}
    onChangeText={onChange}
  />
);

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    margin: 8,
    borderRadius: 4,
  },
});
