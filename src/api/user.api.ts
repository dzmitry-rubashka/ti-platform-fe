import { ApiCommon } from "./apiCommon";

export const userApi = {
  getUsers: () => ApiCommon.get({ path: "users" }),
};
