import { projectsReducer } from "./project";
import { ProjectActions } from "../actions";
import { defaultProjectsState } from "../models";

describe.only("Project Reducer", () => {
  it("should return default state for undefined action", () => {
    expect(
      projectsReducer(defaultProjectsState, {
        type: undefined
      })
    ).toEqual(defaultProjectsState);
  });

  it("should make return true for requests to fetch user's projects", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProjects: {
          ...defaultProjectsState.actions.fetchUserProjects,
          isRequesting: true
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.FETCH_USER_PROJECTS
      })
    ).toEqual(mockTaskState);
  });

  it("should return fetched user's projects", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      projects: defaultProjectsState.projects,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProjects: {
          ...defaultProjectsState.actions.fetchUserProjects,
          isRequesting: false
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.FETCH_USER_PROJECTS_SUCCESS,
        data: {
          data: {
            projects: defaultProjectsState.projects
          },
          code: 0
        }
      })
    ).toEqual(mockTaskState);
  });

  it("should return error for unsuccessful fetch of user's projects", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      code: 400,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProjects: {
          ...defaultProjectsState.actions.fetchUserProjects,
          isRequesting: false,
          error: "error"
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.FETCH_USER_PROJECTS_FAILURE,
        error: {
          code: 400,
          message: "error"
        }
      })
    ).toEqual(mockTaskState);
  });

  it("should make return true for requests to fetch a project", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProject: {
          ...defaultProjectsState.actions.fetchUserProject,
          isRequesting: true
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.FETCH_USER_PROJECT
      })
    ).toEqual(mockTaskState);
  });

  it("should return fetched user project", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      project: defaultProjectsState.project,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProject: {
          ...defaultProjectsState.actions.fetchUserProject,
          isRequesting: false
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.FETCH_USER_PROJECT_SUCCESS,
        data: {
          data: {
            project: defaultProjectsState.project
          },
          code: 0
        }
      })
    ).toEqual(mockTaskState);
  });

  it("should return error for unsuccessful fetch user project", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      code: 400,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProject: {
          ...defaultProjectsState.actions.fetchUserProject,
          isRequesting: false,
          error: "error"
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.FETCH_USER_PROJECT_FAILURE,
        error: {
          code: 400,
          message: "error"
        }
      })
    ).toEqual(mockTaskState);
  });

  it("should make return true for requests to add a project", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      actions: {
        ...defaultProjectsState.actions,
        addProject: {
          ...defaultProjectsState.actions.addProject,
          isRequesting: true
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.ADD_PROJECT
      })
    ).toEqual(mockTaskState);
  });

  it("should return dded project", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      project: defaultProjectsState.project,
      actions: {
        ...defaultProjectsState.actions,
        fetchUserProject: {
          ...defaultProjectsState.actions.fetchUserProject,
          isRequesting: false
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.ADD_PROJECT_SUCCESS,
        data: {
          data: {
            project: defaultProjectsState.project
          },
          code: 0
        }
      }).projects.length
    ).toBe(2);
  });

  it("should return error for unsuccessful addition of project", () => {
    const mockTaskState = {
      ...defaultProjectsState,
      code: 400,
      actions: {
        ...defaultProjectsState.actions,
        addProject: {
          ...defaultProjectsState.actions.addProject,
          isRequesting: false,
          error: "error"
        }
      }
    };

    expect(
      projectsReducer(defaultProjectsState, {
        type: ProjectActions.ADD_PROJECT_FAILURE,
        error: {
          code: 400,
          message: "error"
        }
      })
    ).toEqual(mockTaskState);
  });
});
