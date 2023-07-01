import { ActionStatus } from "../actions";
import { TaskType } from "./";

export interface UserType {
  _id: string;
}
export interface ProjectType {
  _id?: string;
  title?: string;
  description?: string;
  color?: string;
  owner?: UserType;
  tasks?: TaskType[];
  isFavourite?: boolean;
  isArchived?: boolean;
  isDeleted?: boolean;
  collaborators?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectColorsType {
  code: string;
  name: string;
}

export interface ProjectState {
  projects: ProjectType[];
  project: ProjectType;
  colors: ProjectColorsType[];
  code: number;
  actions: {
    addProject: ActionStatus;
    fetchUserProjects: ActionStatus;
    fetchUserProject: ActionStatus;
    fetchProjectColors: ActionStatus;
    editProject: ActionStatus;
    fetchTodaysTasks: ActionStatus;
    createProjectTask: ActionStatus;
    editProjectTask: ActionStatus;
  };
}

export const defaultProjectsState: ProjectState = {
  projects: [
    {
      _id: "1",
      title: "",
      description: "",
      color: "",
      owner: { _id: "" },
      tasks: [
        {
          _id: "",
          description: ""
        }
      ],
      isFavourite: false,
      isArchived: false,
      isDeleted: false,
      collaborators: [],
      createdAt: "",
      updatedAt: ""
    }
  ],
  project: {
    _id: "1",
    title: "",
    description: "",
    color: "",
    owner: { _id: "" },
    tasks: [],
    isFavourite: false,
    isArchived: false,
    isDeleted: false,
    collaborators: [],
    createdAt: "",
    updatedAt: ""
  },
  colors: [
    {
      name: "",
      code: ""
    }
  ],
  code: 0,
  actions: {
    addProject: {
      isRequesting: false,
      error: ""
    },
    fetchUserProjects: {
      isRequesting: false,
      error: ""
    },
    fetchUserProject: {
      isRequesting: false,
      error: ""
    },
    fetchProjectColors: {
      isRequesting: false,
      error: ""
    },
    editProject: {
      isRequesting: false,
      error: ""
    },
    fetchTodaysTasks: {
      isRequesting: false,
      error: ""
    },
    createProjectTask: {
      isRequesting: false,
      error: ""
    },
    editProjectTask: {
      isRequesting: false,
      error: ""
    }
  }
};
