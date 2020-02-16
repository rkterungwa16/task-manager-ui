import { ActionStatus } from "../actions";
export interface UserType {
  id?: string;
  name?: string;
  email?: string;
  token?: string;
}

export interface UserRegistrationDetails {
  name: string;
  email: string;
  password: string;
}

export interface UserState extends UserType {
  actions: {
    createUser: ActionStatus;
  };
}

export const defaultUsersState: UserState = {
  email: "",
  name: "",
  token: "",
  actions: {
    createUser: {
      isRequesting: false,
      error: ""
    }
  }
};
