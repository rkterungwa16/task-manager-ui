import axios from "axios";

import {
  addProject,
  editProject,
  fetchProjectColors,
  fetchUserProject,
  fetchUserProjects
} from "./projectActions";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
// TODO: test that dispatch is called with the right action type;
describe("Project Actions", () => {
  it("should successfully create a project", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const project = { title: "Terungwa" };
    const resp = {
      data: project,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.post.mockResolvedValue(resp);
    await addProject(project)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error for unsuccessful project creation", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const project = { title: "Terungwa" };

    mockedAxios.post.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await addProject(project)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should successfully edit project", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const project = { name: "Terungwa" };
    const resp = {
      data: project,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.put.mockResolvedValue(resp);
    await editProject("12345", project)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error for unsuccessfull editing of a project", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const project = { title: "Terungwa" };

    mockedAxios.put.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await editProject("12345", project)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should successfully return project colors", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const colors = [{ code: "#000", name: "black" }];
    const resp = {
      data: colors,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.get.mockResolvedValue(resp);
    await fetchProjectColors()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error for unsuccessful fetching of project colors", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    mockedAxios.get.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await fetchProjectColors()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should successfully return user project", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const project = { title: "Terungwa" };
    const resp = {
      data: project,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.get.mockResolvedValue(resp);
    await fetchUserProject("12345")(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error for unsuccessful fetching user project", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    mockedAxios.get.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await fetchUserProject("12345")(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should successfully return user projects", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const projects = [{ title: "Terungwa" }];
    const resp = {
      data: projects,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.get.mockResolvedValue(resp);
    await fetchUserProjects()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error for unsuccessful fetching of user projects", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    mockedAxios.get.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await fetchUserProjects()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });
});
