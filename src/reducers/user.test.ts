import { usersReducer } from "./user";
import { AnyAction, UserActions, WithData, WithError } from "../actions";
import { defaultUsersState, UserState } from "../models";

describe.only("User Reducer", () => {
  it("should return default state for undefined action", () => {
    expect(usersReducer(defaultUsersState, {
      type: undefined
    })).toEqual(defaultUsersState)
  });

  it("should return isRequest true for request to create user", () => {
    const mockUserState = {
      ...defaultUsersState,
      actions: {
        ...defaultUsersState.actions,
        createUser: {
          ...defaultUsersState.actions.createUser,
          isRequesting: true
        }
      }
    };

    expect(
      usersReducer(defaultUsersState, {
        type: UserActions.CREATE_USER
      })
    ).toEqual(mockUserState);
  })
  it("should return created user", () => {
    const mockUser = {
      _id: "12345",
      email: "tk@tk.com",
      token: "fxddt45"
    }

    const mockUserState = {
      ...defaultUsersState,
      id: mockUser._id,
      email: mockUser.email,
      token: mockUser.token,
      actions: {
        ...defaultUsersState.actions,
        createUser: {
          ...defaultUsersState.actions.createUser,
          isRequesting: false
        }
      }
    };

    expect(
      usersReducer(defaultUsersState, {
        type: UserActions.CREATE_USER_SUCCESS,
        data: mockUser
      })
    ).toEqual(mockUserState);
  })

  it("should return error for unsuccessful user creation", () => {
    const mockUserState = {
      ...defaultUsersState,
      actions: {
        ...defaultUsersState.actions,
        createUser: {
          error: "error",
          isRequesting: false
        }
      }
    };

    expect(
      usersReducer(defaultUsersState, {
        type: UserActions.CREATE_USER_FAILURE,
        error: "error"
      })
    ).toEqual(mockUserState);
  });
})
