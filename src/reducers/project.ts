import { AnyAction, ProjectActions, WithData, WithError } from "../actions";
import { defaultProjectsState, ProjectState } from "../models";

export function projectsReducer(
  state: ProjectState = defaultProjectsState,
  action: AnyAction
): ProjectState {
  switch (action.type) {
    case ProjectActions.FETCH_USER_PROJECTS:
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchUserProjects: {
            ...state.actions.fetchUserProjects,
            isRequesting: true
          }
        }
      };

    case ProjectActions.FETCH_USER_PROJECTS_SUCCESS:
      const { data: userProjects } = action;
      return {
        ...state,
        projects: userProjects.data.projects,
        actions: {
          ...state.actions,
          fetchUserProjects: {
            ...state.actions.fetchUserProjects,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.FETCH_USER_PROJECTS_FAILURE:
      const { error: fetchUserProjectsError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchUserProjects: {
            isRequesting: false,
            error: fetchUserProjectsError
          }
        }
      };
    default:
      return state;
  }
}
