import axios from "axios";

import { createUser, authenticateUser } from "./userActions";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe.only("User Actions", () => {
  it("should successfully create a user", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const user = { name: "Terungwa" };
    const resp = {
      data: user,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.post.mockResolvedValue(resp);
    await createUser(user)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const user = { name: "Terungwa" };

    mockedAxios.post.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await createUser(user)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should successfully authenticate user", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const user = { name: "Terungwa" };
    const resp = {
      data: user,
      status: 200,
      statusText: "",
      config: {},
      request: {
        url: ""
      }
    };
    mockedAxios.post.mockResolvedValue(resp);
    await authenticateUser(user)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });

  it("should throw an error", async () => {
    const dispatch = jest.fn(x => {
      return true;
    });

    const user = { name: "Terungwa" };

    mockedAxios.post.mockRejectedValue({
      response: {
        data: {
          message: "error"
        }
      }
    });
    await authenticateUser(user)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
  });
});
