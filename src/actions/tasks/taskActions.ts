import axios from "axios";
import * as apiEndPoints from "../../routes/api";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { TaskActions } from "./actionTypes";
import { TaskType } from "../../models";

export const fetchProjectTasks = (id: string) => async (dispatch: any) => {
  dispatch(requestAction(TaskActions.FETCH_PROJECT_TASKS));
  try {
    const url = `${apiEndPoints.tasks}/${id}`;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    dispatch(
      withDataAction(TaskActions.FETCH_PROJECT_TASKS_SUCCESS, response.data)
    );
  } catch (e) {
    dispatch(
      withErrorAction(
        TaskActions.FETCH_PROJECT_TASKS_FAILURE,
        e.response.data.message
      )
    );
  }
};

export const createProjectTasks = (task: TaskType) => async (dispatch: any) => {
  dispatch(requestAction(TaskActions.CREATE_TASK));
  try {
    const url = apiEndPoints.tasks;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.post(url, task, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    dispatch(withDataAction(TaskActions.CREATE_TASK_SUCCESS, response.data));
  } catch (e) {
    dispatch(
      withErrorAction(TaskActions.CREATE_TASK_FAILURE, e.response.data.message)
    );
  }
};
