import { useGlobalStore } from "../../components/Provider/Provider";

import { authenticateUser, bindActions, createUser } from "../../actions";

export const useUserApiActions: any = () => {
  const { state, dispatch } = useGlobalStore();
  const { user } = state;
  const registerActions = bindActions(
    {
      createUser,
      authenticateUser
    },
    dispatch
  );
  return { user, ...registerActions };
};
