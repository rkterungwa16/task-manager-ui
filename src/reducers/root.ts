import { AnyAction } from "../actions";
import { logger } from "../middlewares";
import { defaultUsersState, UserState } from "../models";
import { usersReducer } from "./user";

export interface StoreState {
  user: UserState;
}

export const initialState = {
  user: defaultUsersState
};

export const rootReducer = (state: StoreState, action: AnyAction) => {
  const { user } = state;
  const currentState = { user: usersReducer(user, action) };
  console.log("action -->>>>", action);
  logger(action, state, currentState);
  return currentState;
};

// export default function mainReducer(state: IState, action: object) {
// 	// Receiving previous state here
// 	const { items, login } = state;

// 	// Receiving current state here
// 	const currentState = {
// 		items: itemsReducer.reducer(items, action),
// 		login: loginReducer.reducer(login, action)
// 	};

// 	// Middlewares
// 	logger(action, state, currentState);

// 	return currentState;
// }
