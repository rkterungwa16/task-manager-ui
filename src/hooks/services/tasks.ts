import { useGlobalStore } from "../../components/Provider/Provider";

import {
  bindActions,
  fetchProjectTasks,
  fetchTodaysTasks
} from "../../actions";

export const useProjectTasksApiActions: any = () => {
  const { state, dispatch } = useGlobalStore();
  const { task } = state;
  const taskActions = bindActions(
    {
      fetchProjectTasks,
      fetchTodaysTasks
    },
    dispatch
  );
  return { task, ...taskActions };
};
