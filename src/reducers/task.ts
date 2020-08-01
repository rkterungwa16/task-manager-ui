import { AnyAction, TaskActions, WithData, WithError } from "../actions";
import { defaultTasksState, TaskState } from "../models";

export function tasksReducer(
  state: TaskState = defaultTasksState,
  action: AnyAction
): TaskState {
  switch (action.type) {
    case TaskActions.FETCH_PROJECT_TASKS:
      console.log("fetching reducers -->>>");
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
      console.log("reducer project tasks -->>", projectTasks);
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
    default:
      return state;
  }
}
