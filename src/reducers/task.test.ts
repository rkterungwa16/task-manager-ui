import { tasksReducer } from "./task";
import { TaskActions } from "../actions";
import { defaultTasksState } from "../models";

describe.only("Task Reducer", () => {
  it("should return default state for undefined action", () => {
    expect(
      tasksReducer(defaultTasksState, {
        type: undefined
      })
    ).toEqual(defaultTasksState);
  });

  it("should make return true for requests to fetch project tasks", () => {
    const mockTaskState = {
      ...defaultTasksState,
      actions: {
        ...defaultTasksState.actions,
        fetchProjectTasks: {
          ...defaultTasksState.actions.fetchProjectTasks,
          isRequesting: true
        }
      }
    };

    expect(
      tasksReducer(defaultTasksState, {
        type: TaskActions.FETCH_PROJECT_TASKS
      })
    ).toEqual(mockTaskState);
  });

  it("should return fetched project tasks", () => {
    const mockTaskState = {
      ...defaultTasksState,
      tasks: defaultTasksState.tasks,
      actions: {
        ...defaultTasksState.actions,
        fetchProjectTasks: {
          ...defaultTasksState.actions.fetchProjectTasks,
          isRequesting: false
        }
      }
    };

    expect(
      tasksReducer(defaultTasksState, {
        type: TaskActions.FETCH_PROJECT_TASKS_SUCCESS,
        data: {
          data: {
            tasks: defaultTasksState.tasks
          },
          code: 0
        }
      })
    ).toEqual(mockTaskState);
  });

  it("should return error for unsuccessful fetch of tasks", () => {
    const mockTaskState = {
      ...defaultTasksState,
      actions: {
        ...defaultTasksState.actions,
        fetchProjectTasks: {
          ...defaultTasksState.actions.fetchProjectTasks,
          isRequesting: false,
          error: "error"
        }
      }
    };

    expect(
      tasksReducer(defaultTasksState, {
        type: TaskActions.FETCH_PROJECT_TASKS_FAILURE,
        error: "error"
      })
    ).toEqual(mockTaskState);
  });
});
