export const asyncer = (dispatch: any, state: any) => (action: any) =>
  typeof action === "function" ? action(dispatch, state) : dispatch(action);
