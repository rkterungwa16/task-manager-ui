import { useGlobalStore } from "../../components/Provider/Provider";

import { bindActions, fetchUserProjects, addProject } from "../../actions";

export const useProjectsApiActions: any = () => {
  const { state, dispatch } = useGlobalStore();
  const { project } = state;
  const projectActions = bindActions(
    {
      fetchUserProjects,
      addProject
    },
    dispatch
  );
  return { project, ...projectActions };
};
