import axios from "axios";
import { register } from "../../constants";
import { UserRegistrationDetails } from "../../models";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { UserActions } from "./actionTypes";

export const createUser = (user: UserRegistrationDetails) => async (
  dispatch: any
) => {
  dispatch(requestAction(UserActions.CREATE_USER));
  try {
    const url = register; // ApiEndpoints.register;
    const response = await axios.post(url, user);
    console.log("reponse --->>>>", response);
    dispatch(withDataAction(UserActions.CREATE_USER_SUCCESS, response.data));
  } catch (e) {
    console.log("error response ---->>>", e.response.data.message);
    dispatch(
      withErrorAction(UserActions.CREATE_USER_FAILURE, e.response.data.message)
    );
  }
};
