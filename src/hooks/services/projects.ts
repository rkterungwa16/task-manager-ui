import { useGlobalStore } from "../../components/Provider/Provider";

import { bindActions, fetchUserProjects } from "../../actions";

export const useProjectsApiActions: any = () => {
  const { state, dispatch } = useGlobalStore();
  const { project } = state;
  const projectActions = bindActions(
    {
      fetchUserProjects
    },
    dispatch
  );
  return { project, ...projectActions };
};
