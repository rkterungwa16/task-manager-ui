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
  task: TaskType;
  code: number;
  actions: {
    fetchProjectTasks: ActionStatus;
    fetchTodaysTasks: ActionStatus;
  };
}

export const defaultTasksState: TaskState = {
  tasks: [
    {
      _id: "",
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
  task: {
    _id: "",
    content: "",
    priority: null,
    userId: "",
    project: "",
    label: [],
    dueDate: "",
    createdAt: "",
    updatedAt: ""
  },
  code: 0,
  actions: {
    fetchProjectTasks: {
      isRequesting: false,
      error: ""
    },
    fetchTodaysTasks: {
      isRequesting: false,
      error: ""
    }
  }
};
