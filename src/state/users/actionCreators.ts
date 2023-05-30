import { userApi } from "api/user.api";
import { getUsers, getUsersLoading } from "./usersSlice";

export const fetchUsers = () => async (dispatch: any) => {
  dispatch(getUsersLoading(true));
  try {
    const res = await userApi.getUsers();
    dispatch(getUsers(res));
  } catch (e) {
    dispatch(getUsersLoading(false));
  }
};
