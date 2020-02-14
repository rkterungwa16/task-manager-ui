import { UserType } from "../../models";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { UserActions } from "./actionTypes";
export const createUser = (user: UserType) => async (dispatch: any) => {
  dispatch(requestAction(UserActions.CREATE_USER));
  try {
    // const url = "/register" // ApiEndpoints.register;
    const response = { data: "" }; // await axios.post(url, user);
    dispatch(withDataAction(UserActions.CREATE_USER_SUCCESS, response.data));
  } catch (e) {
    dispatch(withErrorAction(UserActions.CREATE_USER_FAILURE, e));
  }
};
