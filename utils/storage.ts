import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';

const STORAGE_KEY = 'USER_APP_STATE';

export const saveStateToStorage = async (users: User[], page: number) => {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ users, page })
  );
};

export const loadStateFromStorage = async () => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};
