export interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

export interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export type Person =  User | Admin;
