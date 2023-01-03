export interface IUser extends IAuthUser {
  uid: string;
  accessToken: string;
}

export interface IAuthUser {
  email: string;
  password: string;
}
