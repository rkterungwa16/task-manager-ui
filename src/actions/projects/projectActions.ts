import axios from "axios";
import * as apiEndPoints from "../../routes/api";
import { requestAction, withDataAction, withErrorAction } from "../actions";
import { ProjectType, TaskType } from "../../models";
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
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(
        ProjectActions.FETCH_USER_PROJECTS_FAILURE,
        e.response.data
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
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(ProjectActions.ADD_PROJECT_FAILURE, e.response.data)
    );
  }
};

export const fetchUserProject = (projectId: string) => async (
  dispatch: any
) => {
  dispatch(requestAction(ProjectActions.FETCH_USER_PROJECT));
  try {
    const url = `${apiEndPoints.projects}/${projectId}`;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(
      withDataAction(ProjectActions.FETCH_USER_PROJECT_SUCCESS, response.data)
    );
  } catch (e) {
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(
        ProjectActions.FETCH_USER_PROJECT_FAILURE,
        e.response.data
      )
    );
  }
};

export const fetchProjectColors = () => async (dispatch: any) => {
  dispatch(requestAction(ProjectActions.FETCH_PROJECT_COLORS));
  try {
    const url = apiEndPoints.colors;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(
      withDataAction(ProjectActions.FETCH_PROJECT_COLORS_SUCCESS, response.data)
    );
  } catch (e) {
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(
        ProjectActions.FETCH_PROJECT_COLORS_FAILURE,
        e.response.data
      )
    );
  }
};

export const editProject = (projectId: string, project: any) => async (
  dispatch: any
) => {
  dispatch(requestAction(ProjectActions.EDIT_PROJECT));
  try {
    const url = `${apiEndPoints.projects}/${projectId}`;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.put(url, project, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(
      withDataAction(ProjectActions.EDIT_PROJECT_SUCCESS, response.data)
    );
  } catch (e) {
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(ProjectActions.EDIT_PROJECT_FAILURE, e.response.data)
    );
  }
};

export const fetchTodaysTasks = () => async (dispatch: any) => {
  dispatch(requestAction(ProjectActions.FETCH_TODAYS_TASKS));
  try {
    const url = `${apiEndPoints.tasks}/today`;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    dispatch(
      withDataAction(ProjectActions.FETCH_TODAYS_TASKS_SUCCESS, response.data)
    );
  } catch (e) {
    if (e.response.data.code >= 400 && e.response.data.code < 600) {
      window.localStorage.clear();
    }
    dispatch(
      withErrorAction(
        ProjectActions.FETCH_TODAYS_TASKS_FAILURE,
        e.response.data
      )
    );
  }
};

export const createProjectTasks = (task: TaskType, projectId: string) => async (
  dispatch: any
) => {
  dispatch(requestAction(ProjectActions.CREATE_PROJECT_TASK));
  try {
    const url = `${apiEndPoints.tasks}/${projectId}`;
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.post(url, task, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    dispatch(
      withDataAction(ProjectActions.CREATE_PROJECT_TASK_SUCCESS, response.data)
    );
  } catch (e) {
    dispatch(
      withErrorAction(
        ProjectActions.CREATE_PROJECT_TASK_FAILURE,
        e.response.data.message
      )
    );
  }
};

export const editProjectTask = (
  task: TaskType,
  projectId: string,
  taskId: string
) => async (dispatch: any) => {
  dispatch(requestAction(ProjectActions.EDIT_PROJECT_TASK));
  try {
    const url = apiEndPoints.taskEdit
      .replace(":taskId", taskId)
      .replace(":projectId", projectId);
    const authToken = window.localStorage.getItem("currentUser");
    const response = await axios.put(url, task, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    dispatch(
      withDataAction(ProjectActions.EDIT_PROJECT_TASK_SUCCESS, response.data)
    );
  } catch (e) {
    dispatch(
      withErrorAction(
        ProjectActions.EDIT_PROJECT_TASK_FAILURE,
        e.response.data.message
      )
    );
  }
};
