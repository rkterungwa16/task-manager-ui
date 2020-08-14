import axios from "axios";
import * as apiEndPoints from "../../routes/api";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { TaskActions } from "./actionTypes";

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

export const fetchTodaysTasks = () => async (dispatch: any) => {
  dispatch(requestAction(TaskActions.FETCH_TODAYS_TASKS));
  try {
    const url = `${apiEndPoints.tasks}/today`;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(
      withDataAction(TaskActions.FETCH_TODAYS_TASKS_SUCCESS, response.data)
    );
  } catch (e) {
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(TaskActions.FETCH_TODAYS_TASKS_FAILURE, e.response.data)
    );
  }
};
