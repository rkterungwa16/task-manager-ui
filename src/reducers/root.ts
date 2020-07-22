import { AnyAction } from "../actions";
import { logger } from "../middlewares";
import {
  defaultUsersState,
  UserState,
  defaultProjectsState,
  ProjectState
} from "../models";
import { usersReducer } from "./user";
import { projectsReducer } from "./project";

export interface StoreState {
  user: UserState;
  project: ProjectState;
}

export const initialState = {
  user: defaultUsersState,
  project: defaultProjectsState
};

export const rootReducer = (state: StoreState, action: AnyAction) => {
  const { user, project } = state;
  const currentState = {
    user: usersReducer(user, action),
    project: projectsReducer(project, action)
  };
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
