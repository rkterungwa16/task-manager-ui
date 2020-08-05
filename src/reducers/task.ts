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

    case TaskActions.FETCH_TODAYS_TASKS:
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

    case TaskActions.FETCH_TODAYS_TASKS_SUCCESS:
      const { data: todaysTasks } = action;
      return {
        ...state,
        tasks: todaysTasks.data.tasks,
        actions: {
          ...state.actions,
          fetchTodaysTasks: {
            ...state.actions.fetchTodaysTasks,
            isRequesting: false,
            error: ""
          }
        }
      };

    case TaskActions.FETCH_TODAYS_TASKS_FAILURE:
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
    default:
      return state;
  }
}
