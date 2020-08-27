import { useGlobalStore } from "../../components/Provider/Provider";

import {
  bindActions,
  fetchUserProjects,
  addProject,
  fetchUserProject,
  fetchProjectColors,
  editProject,
  createProjectTasks
} from "../../actions";

export const useProjectsApiActions: any = () => {
  const { state, dispatch } = useGlobalStore();
  const { project } = state;
  const projectActions = bindActions(
    {
      fetchUserProjects,
      fetchUserProject,
      addProject,
      fetchProjectColors,
      editProject,
      createProjectTasks
    },
    dispatch
  );
  return { project, ...projectActions };
};
