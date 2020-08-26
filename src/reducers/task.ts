import { AnyAction, TaskActions, WithData, WithError } from "../actions";
import { defaultTasksState, TaskState } from "../models";

export function tasksReducer(
  state: TaskState = defaultTasksState,
  action: AnyAction
): TaskState {
  switch (action.type) {
    case TaskActions.FETCH_PROJECT_TASKS:
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchProjectTasks: {
            ...state.actions.fetchProjectTasks,
            isRequesting: true
          }
        }
      };

    case TaskActions.FETCH_PROJECT_TASKS_SUCCESS:
      const { data: projectTasks } = action;
      return {
        ...state,
        tasks: projectTasks.data.tasks,
        code: projectTasks.code,
        actions: {
          ...state.actions,
          fetchProjectTasks: {
            ...state.actions.fetchProjectTasks,
            isRequesting: false,
            error: ""
          }
        }
      };

    case TaskActions.FETCH_PROJECT_TASKS_FAILURE:
      const { error: fetchProjectTasksError } = action as WithError<string>;
      return {
        ...state,
        actions: {
          ...state.actions,
          fetchProjectTasks: {
            isRequesting: false,
            error: fetchProjectTasksError
          }
        }
      };

    case TaskActions.CREATE_TASK:
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

    case TaskActions.CREATE_TASK_SUCCESS:
      const { data: projectTask } = action;
      const tasks = state.tasks.concat(projectTask.data.tasks);
      return {
        ...state,
        tasks,
        code: projectTasks.code,
        actions: {
          ...state.actions,
          createProjectTask: {
            ...state.actions.createProjectTask,
            isRequesting: false,
            error: ""
          }
        }
      };

    case TaskActions.CREATE_TASK_FAILURE:
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
    default:
      return state;
  }
}
