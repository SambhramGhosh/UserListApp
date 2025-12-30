import { User } from '../types/user';

export const fetchUsers = async (page: number): Promise<User[]> => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=20`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await response.json();
  return data.results;
};
