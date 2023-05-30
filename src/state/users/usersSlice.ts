import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "state/users/types";

export interface UsersState {
  users: IUser[];
  getUsersLoading: boolean;
}

const initialState: UsersState = {
  users: [],
  getUsersLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state) => {
      state.users.pop();
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getUsersLoading: (state, action) => {
      state.getUsersLoading = action.payload;
    },
  },
});

export const { addUser, removeUser, getUsers, getUsersLoading } =
  usersSlice.actions;

export default usersSlice.reducer;
