import { ActionStatus } from "../actions";
export interface UserType {
  id?: string;
  name?: string;
  email?: string;
  token?: string;
  code?: number;
}

export interface UserRegistrationDetails {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserState extends UserType {
  actions: {
    createUser: ActionStatus;
    authenticateUser: ActionStatus;
  };
}

export const defaultUsersState: UserState = {
  email: "",
  name: "",
  token: "",
  code: 0,
  actions: {
    createUser: {
      isRequesting: false,
      error: ""
    },
    authenticateUser: {
      isRequesting: false,
      error: ""
    }
  }
};
