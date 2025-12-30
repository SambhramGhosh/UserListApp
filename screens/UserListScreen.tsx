import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  restoreUsers,
  fetchNextPage,
  setSearchQuery,
  persistUsers,
} from '../store/userSlice';
import { SearchBar } from '../components/SearchBar';
import { UserItem } from '../components/UserItem';
import { useAppLifecycle } from '../hooks/useAppLifecycle';

export const UserListScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { users, page, loading, searchQuery, error } =
    useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(restoreUsers()).then(result => {
      if (!result.payload) {
        dispatch(fetchNextPage(1));
      }
    });
  }, []);

  useAppLifecycle(() => {
    dispatch(persistUsers());
  });

  const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        value={searchQuery}
        onChange={text => dispatch(setSearchQuery(text))}
      />

      {error && <Text>{error}</Text>}

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.login.uuid}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            onPress={() =>
              navigation.navigate('Detail', { id: item.login.uuid })
            }
          />
        )}
        onEndReached={() => dispatch(fetchNextPage(page + 1))}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};
