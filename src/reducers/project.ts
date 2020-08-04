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

    case ProjectActions.ADD_PROJECT:
      return {
        ...state,
        actions: {
          ...state.actions,
          addProject: {
            ...state.actions.addProject,
            isRequesting: true
          }
        }
      };

    case ProjectActions.ADD_PROJECT_SUCCESS:
      const { data: addedProject } = action;
      return {
        ...state,
        projects: [...state.projects, addedProject.data.project],
        actions: {
          ...state.actions,
          addProject: {
            ...state.actions.addProject,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.ADD_PROJECT_FAILURE:
      const { error: addProjectError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          addProject: {
            isRequesting: false,
            error: addProjectError
          }
        }
      };
    case ProjectActions.FETCH_USER_PROJECT:
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchUserProject: {
            ...state.actions.fetchUserProject,
            isRequesting: true
          }
        }
      };

    case ProjectActions.FETCH_USER_PROJECT_SUCCESS:
      const { data: userProject } = action;
      return {
        ...state,
        project: userProject.data.project,
        actions: {
          ...state.actions,
          fetchUserProject: {
            ...state.actions.fetchUserProject,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.FETCH_USER_PROJECT_FAILURE:
      const { error: fetchUserProjectError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchUserProject: {
            isRequesting: false,
            error: fetchUserProjectError
          }
        }
      };
    default:
      return state;
  }
}
