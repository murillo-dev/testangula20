import { User } from './user';

export interface Credentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  message: string;
  access_token: string;
  refresh_token: string;
  date: User;
}
