import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchUsers } from "state/users/actionCreators";
import { addUser, removeUser } from "state/users/usersSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { IUser } from "state/users/types";

const UsersList: React.FC = () => {
  const { t } = useTranslation();
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const newUser: IUser = {
    id: 20,
    name: "test name",
    username: "testUsername",
    email: "test@mail.com",
  };

  return (
    <>
      <ul>
        {users.length > 0 &&
          users.map((item: IUser) => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button
        data-testid="add"
        type="button"
        onClick={() => dispatch(addUser(newUser))}
      >
        {t("users.add")}
      </button>
      <button
        data-testid="remove"
        type="button"
        onClick={() => dispatch(removeUser())}
      >
        {t("users.remove")}
      </button>
    </>
  );
};

export default UsersList;
