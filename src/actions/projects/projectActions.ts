import axios from "axios";
import * as apiEndPoints from "../../routes/api";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { ProjectType } from "../../models";
import { ProjectActions } from "./actionTypes";

export const fetchUserProjects = () => async (dispatch: any) => {
  dispatch(requestAction(ProjectActions.FETCH_USER_PROJECTS));
  try {
    const url = apiEndPoints.projects;
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

export const addProject = (project: ProjectType) => async (dispatch: any) => {
  dispatch(requestAction(ProjectActions.ADD_PROJECT));
  try {
    const url = apiEndPoints.projects;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.post(url, project, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(withDataAction(ProjectActions.ADD_PROJECT_SUCCESS, response.data));
  } catch (e) {
    dispatch(
      withErrorAction(
        ProjectActions.ADD_PROJECT_FAILURE,
        e.response.data.message
      )
    );
  }
};
