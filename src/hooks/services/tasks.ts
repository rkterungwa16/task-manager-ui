import { useGlobalStore } from "../../components/Provider/Provider";

import { bindActions, fetchProjectTasks } from "../../actions";

export const useProjectTasksApiActions: any = () => {
  const { state, dispatch } = useGlobalStore();
  const { task } = state;
  const taskActions = bindActions(
    {
      fetchProjectTasks
    },
    dispatch
  );
  return { task, ...taskActions };
};
