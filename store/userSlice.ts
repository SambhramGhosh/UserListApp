import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/userApi';
import { User } from '../types/user';
import { loadStateFromStorage, saveStateToStorage } from '../utils/storage';
import { RootState } from './index';

interface UserState {
  users: User[];
  page: number;
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: UserState = {
  users: [],
  page: 1,
  loading: false,
  error: null,
  searchQuery: '',
};

export const restoreUsers = createAsyncThunk(
  'users/restore',
  async () => {
    return await loadStateFromStorage();
  }
);

export const fetchNextPage = createAsyncThunk(
  'users/fetchNext',
  async (page: number) => {
    return await fetchUsers(page);
  }
);

export const persistUsers = createAsyncThunk(
  'users/persist',
  async (_, { getState }) => {
    const state = getState() as RootState;
    await saveStateToStorage(state.users.users, state.users.page);
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(restoreUsers.fulfilled, (state, action) => {
        if (action.payload) {
          state.users = action.payload.users;
          state.page = action.payload.page;
        }
      })
      .addCase(fetchNextPage.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNextPage.fulfilled, (state, action) => {
        state.users.push(...action.payload);
        state.page += 1;
        state.loading = false;
      })
      .addCase(fetchNextPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching users';
      });
  },
});

export const { setSearchQuery } = userSlice.actions;
export default userSlice.reducer;
