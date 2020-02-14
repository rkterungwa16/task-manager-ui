import { createContext, useCallback, useContext, useReducer } from "react";

import { asyncer } from "../../middlewares/";
import { initialState, rootReducer } from "../../reducers/root";

export interface TaskManagerProps {
  children?: React.ReactNode;
}
export interface ContextProps {
  state: any;
  dispatch: any;
}

export const GlobalStore = createContext({} as ContextProps);
export const useGlobalStore = () => useContext(GlobalStore);
export const Provider = (props: TaskManagerProps) => {
  const [state, dispatchBase] = useReducer(rootReducer, initialState);
  const dispatch = useCallback(asyncer(dispatchBase, state), []);
  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalStore.Provider>
  );
};
