import { requestAction, withDataAction, withErrorAction } from "./actions";

describe("Actions", () => {
  it("should return the correct action type", () => {
    expect(requestAction("CREATE_USER")).toEqual({ type: "CREATE_USER" });
  });
  it("should return correct action type with data", () => {
    expect(
      withDataAction("CREATE_USER_SUCCESS", {
        name: "terungwa",
        email: "terungwa@tsk.com"
      })
    ).toEqual({
      type: "CREATE_USER_SUCCESS",
      data: {
        name: "terungwa",
        email: "terungwa@tsk.com"
      }
    });
  });
  it("should return correct action with error", () => {
    expect(withErrorAction("CREATE_USER_FAILURE", "failed to create")).toEqual({
      type: "CREATE_USER_FAILURE",
      error: "failed to create"
    });
  });
});
