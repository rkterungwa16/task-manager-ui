export interface INameToValueMap {
  [key: string]: any;
}

export function bindActions(
  actions: any,
  dispatch: any
): INameToValueMap | any {
  function bindAction(action: any, dispatcher: any) {
    return function() {
      return dispatcher(action.apply(null, arguments));
    };
  }
  // if it's a single action
  if (typeof actions === "function") {
    return bindAction(actions, dispatch);
  }
  if (typeof actions !== "object" || actions === null) {
    throw new Error(
      `bindActions expected an object or a function, instead received ${
        actions === null ? "null" : typeof actions
      }. `
    );
  }
  const boundActions: INameToValueMap = {};
  Object.keys(actions).forEach(key => {
    const action: any = actions[key];
    if (typeof action === "function") {
      boundActions[key] = bindAction(action, dispatch);
    }
  });
  return boundActions;
}
