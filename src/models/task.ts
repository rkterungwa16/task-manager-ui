import { ActionStatus } from "../actions";

enum Priority {
  low = 1,
  medium = 2,
  high = 3,
  highest = 4
}
export interface TaskType {
  _id?: string;
  content?: string;
  priority?: Priority;
  userId?: string;
  project?: string;
  label?: string[];
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TaskState {
  tasks: TaskType[];
  actions: {
    fetchProjectTasks: ActionStatus;
  };
}

export const defaultTasksState: TaskState = {
  tasks: [
    {
      content: "",
      priority: null,
      userId: "",
      project: "",
      label: [],
      dueDate: "",
      createdAt: "",
      updatedAt: ""
    }
  ],
  actions: {
    fetchProjectTasks: {
      isRequesting: false,
      error: ""
    }
  }
};
