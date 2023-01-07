export interface IndexPageProps {
  postList: IPostItem[];
  usersList: IUser[];
}

export interface TopUsersListProps {
  usersList: IUser[];
}

export interface PostListProps {
  postList: IPostItem[];
}

export type IPostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
