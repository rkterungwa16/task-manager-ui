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
        code: userProjects.code,
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
      const { error: fetchUserProjectsError } = action as WithError<{
        message: string;
        code: number;
      }>;
      return {
        ...state,
        code: fetchUserProjectsError.code,
        actions: {
          ...state.actions,
          fetchUserProjects: {
            isRequesting: false,
            error: fetchUserProjectsError.message
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
        code: addedProject.code,
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
      const { error: addProjectError } = action as WithError<{
        message: string;
        code: number;
      }>;
      return {
        ...state,
        code: addProjectError.code,
        actions: {
          ...state.actions,
          addProject: {
            isRequesting: false,
            error: addProjectError.message
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
        code: userProject.code,
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
      const { error: fetchUserProjectError } = action as WithError<{
        message: string;
        code: number;
      }>;
      return {
        ...state,
        code: fetchUserProjectError.code,
        actions: {
          ...state.actions,
          fetchUserProject: {
            isRequesting: false,
            error: fetchUserProjectError.message
          }
        }
      };

    case ProjectActions.FETCH_PROJECT_COLORS:
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchProjectColors: {
            ...state.actions.fetchProjectColors,
            isRequesting: true
          }
        }
      };

    case ProjectActions.FETCH_PROJECT_COLORS_SUCCESS:
      const { data: projectColors } = action;
      return {
        ...state,
        colors: projectColors.data.colors,
        code: projectColors.code,
        actions: {
          ...state.actions,
          fetchProjectColors: {
            ...state.actions.fetchProjectColors,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.FETCH_PROJECT_COLORS_FAILURE:
      const { error: fetchProjectColorsError } = action as WithError<{
        message: string;
        code: number;
      }>;
      return {
        ...state,
        code: fetchProjectColorsError.code,
        actions: {
          ...state.actions,
          fetchProjectColors: {
            isRequesting: false,
            error: fetchProjectColorsError.message
          }
        }
      };
    default:
      return state;
  }
}
