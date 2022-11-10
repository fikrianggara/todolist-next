export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};
export type Geo = {
  lat: string;
  lng: string;
};
export type address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};
export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: Company;
};
