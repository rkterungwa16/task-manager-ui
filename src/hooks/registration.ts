import { useGlobalStore } from "../components/Provider/Provider";

import { bindActions, createUser } from "../actions";

export const useRegistration: any = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { user } = state;
  // Bind Actions
  const registerActions = bindActions(
    {
      createUser
    },
    dispatch
  );

  return { user, ...registerActions };
};
