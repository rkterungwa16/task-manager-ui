import axios from "axios";
import * as apiEndPoints from "../../routes/api";
import { UserRegistrationDetails } from "../../models";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { UserActions } from "./actionTypes";

export const createUser = (user: UserRegistrationDetails) => async (
  dispatch: any
) => {
  dispatch(requestAction(UserActions.CREATE_USER));
  try {
    const url = apiEndPoints.register;
    const response = await axios.post(url, user);
    dispatch(withDataAction(UserActions.CREATE_USER_SUCCESS, response.data));
  } catch (e) {
    dispatch(
      withErrorAction(UserActions.CREATE_USER_FAILURE, e.response.data.message)
    );
  }
};

export const authenticateUser = (user: UserRegistrationDetails) => async (
  dispatch: any
) => {
  dispatch(requestAction(UserActions.AUTHENTICATE_USER));
  try {
    const url = apiEndPoints.login;
    const response = await axios.post(url, user);
    dispatch(
      withDataAction(UserActions.AUTHENTICATE_USER_SUCCESS, response.data)
    );
  } catch (e) {
    dispatch(
      withErrorAction(
        UserActions.AUTHENTICATE_USER_FAILURE,
        e.response.data.message
      )
    );
  }
};
