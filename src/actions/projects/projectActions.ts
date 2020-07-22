import axios from "axios";
import * as apiEndPoints from "../../routes/api";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { ProjectActions } from "./actionTypes";

export const fetchUserProjects = () => async (dispatch: any) => {
  dispatch(requestAction(ProjectActions.FETCH_USER_PROJECTS));
  try {
    const url = apiEndPoints.userProjects;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(
      withDataAction(ProjectActions.FETCH_USER_PROJECTS_SUCCESS, response.data)
    );
  } catch (e) {
    dispatch(
      withErrorAction(
        ProjectActions.FETCH_USER_PROJECTS_FAILURE,
        e.response.data.message
      )
    );
  }
};
