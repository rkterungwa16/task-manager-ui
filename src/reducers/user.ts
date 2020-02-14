import { AnyAction, UserActions, WithData, WithError } from "../actions";
import { defaultUsersState, UserState } from "../models";

export function usersReducer(
  state: UserState = defaultUsersState,
  action: AnyAction
): UserState {
  switch (action.type) {
    case UserActions.CREATE_USER:
      return {
        ...state,
        actions: {
          ...state.actions,
          createUser: {
            ...state.actions.createUser,
            isRequesting: true
          }
        }
      };

    case UserActions.CREATE_USER_SUCCESS:
      const { data: userDetails } = action;
      return {
        ...state,
        id: userDetails._id,
        email: userDetails.email,
        token: userDetails.token,
        actions: {
          ...state.actions,
          createUser: {
            ...state.actions.createUser,
            isRequesting: false,
            error: ""
          }
        }
      };

    case UserActions.CREATE_USER_FAILURE:
      const { error: createUserError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          createUser: {
            isRequesting: false,
            error: createUserError
          }
        }
      };
    default:
      return state;
  }
}
