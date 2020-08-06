import { bindActions } from "./bindActions";

describe("Bind Actions", () => {
  it("should call a dispatcher for a single action", () => {
    const createUser = jest.fn();
    const dispatch = jest.fn(x => {
      return true;
    });
    bindActions(createUser, dispatch)();
    expect(dispatch.mock.calls.length).toBe(1);
  });

  it("should throw an error when wrong action types are provided", () => {
    expect(() => {
      bindActions("", "");
    }).toThrow();
  });

  it("should call a dispatchers for multiple actions", () => {
    const createUser = jest.fn();
    const dispatch = jest.fn(x => {
      return true;
    });
    const userActions = bindActions(
      {
        createUser
      },
      dispatch
    );
    userActions.createUser();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
