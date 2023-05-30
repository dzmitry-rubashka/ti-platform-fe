export interface IRole {
  id: number;
  title: string;
}

export interface IUser {
  id: number;
  name: string;
  username?: string;
  email: string;
  role?: IRole[];
}
