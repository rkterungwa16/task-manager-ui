import axios from "axios";

import { fetchProjectTasks, fetchTodaysTasks } from "./taskActions";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe.only("Task Actions", () => {
  it("should successfully project tasks", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const tasks = [{ content: "physics" }];
    const resp = {
      data: tasks,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.get.mockResolvedValue(resp);
    await fetchProjectTasks("12345")(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error for unsuccessful fetch of project tasks", async () => {
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
    await fetchProjectTasks("12345")(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should successfully return tasks for today", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const tasks = [{ content: "Terungwa" }];
    const resp = {
      data: tasks,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.post.mockResolvedValue(resp);
    await fetchTodaysTasks()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    mockedAxios.post.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await fetchTodaysTasks()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });
});
