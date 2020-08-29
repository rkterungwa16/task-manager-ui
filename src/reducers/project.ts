import { AnyAction, ProjectActions, WithData, WithError } from "../actions";
import { defaultProjectsState, ProjectState } from "../models";
import { modifyTasks } from "./utils";

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
    case ProjectActions.EDIT_PROJECT:
      return {
        ...state,
        actions: {
          ...state.actions,
          editProject: {
            ...state.actions.addProject,
            isRequesting: true
          }
        }
      };

    case ProjectActions.EDIT_PROJECT_SUCCESS:
      const { data: editedProject } = action;
      const modifiedProject = state.projects.map(project => {
        if (project._id === editedProject.data.project._id) {
          return editedProject.data.project;
        }
        return project;
      });

      return {
        ...state,
        projects: modifiedProject,
        code: editedProject.code,
        actions: {
          ...state.actions,
          editProject: {
            ...state.actions.editProject,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.ADD_PROJECT_FAILURE:
      const { error: editProjectError } = action as WithError<{
        message: string;
        code: number;
      }>;
      return {
        ...state,
        code: editProjectError.code,
        actions: {
          ...state.actions,
          editProject: {
            isRequesting: false,
            error: editProjectError.message
          }
        }
      };
    case ProjectActions.FETCH_TODAYS_TASKS:
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchTodaysTasks: {
            ...state.actions.fetchTodaysTasks,
            isRequesting: true
          }
        }
      };

    case ProjectActions.FETCH_TODAYS_TASKS_SUCCESS:
      const { data: todaysTasks } = action;
      return {
        ...state,
        project: todaysTasks.data.project,
        code: todaysTasks.code,
        actions: {
          ...state.actions,
          fetchTodaysTasks: {
            ...state.actions.fetchTodaysTasks,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.FETCH_TODAYS_TASKS_FAILURE:
      const { error: fetchTodaysTasksError } = action as WithError<{
        message: string;
        code: number;
      }>;
      return {
        ...state,
        code: fetchTodaysTasksError.code,
        actions: {
          ...state.actions,
          fetchTodaysTasks: {
            isRequesting: false,
            error: fetchTodaysTasksError.message
          }
        }
      };

    case ProjectActions.CREATE_PROJECT_TASK:
      return {
        ...state,
        actions: {
          ...state.actions,
          createProjectTask: {
            ...state.actions.createProjectTask,
            isRequesting: true
          }
        }
      };

    case ProjectActions.CREATE_PROJECT_TASK_SUCCESS:
      const { data: projectTask } = action;
      const projects = state.projects.map(project => {
        if (project._id === projectTask.data.task.project) {
          return {
            ...project,
            tasks: [...project.tasks, projectTask.data.task]
          };
        }
        return project;
      });
      const project = {
        ...state.project,
        tasks: [...state.project.tasks, projectTask.data.task]
      };
      return {
        ...state,
        projects,
        project,
        code: projectTask.code,
        actions: {
          ...state.actions,
          createProjectTask: {
            ...state.actions.createProjectTask,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.CREATE_PROJECT_TASK_FAILURE:
      const { error: createProjectTaskError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          createProjectTask: {
            isRequesting: false,
            error: createProjectTaskError
          }
        }
      };

    case ProjectActions.EDIT_PROJECT_TASK:
      return {
        ...state,
        actions: {
          ...state.actions,
          editProjectTask: {
            ...state.actions.editProjectTask,
            isRequesting: true
          }
        }
      };

    case ProjectActions.EDIT_PROJECT_TASK_SUCCESS:
      const { data: editedProjectTask } = action;

      const editedProjects = state.projects.map(project => {
        if (project._id === editedProjectTask.data.task.project) {
          return {
            ...project,
            tasks: modifyTasks(project, editedProjectTask)
          };
        }
        return project;
      });

      const editedTaskProject = {
        ...state.project,
        tasks: modifyTasks(state.project, editedProjectTask)
      };

      return {
        ...state,
        projects: editedProjects,
        project: editedTaskProject,
        code: editedProjectTask.code,
        actions: {
          ...state.actions,
          editProjectTask: {
            ...state.actions.editProjectTask,
            isRequesting: false,
            error: ""
          }
        }
      };

    case ProjectActions.EDIT_PROJECT_TASK_FAILURE:
      const { error: editProjectTaskError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          editProjectTask: {
            isRequesting: false,
            error: editProjectTaskError
          }
        }
      };
    default:
      return state;
  }
}
