import { ActionStatus } from "../actions";
export interface ProjectType {
  _id?: string;
  title?: string;
  description?: string;
  color?: string;
  owner?: string;
  tasks?: string[];
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
  };
}

export const defaultProjectsState: ProjectState = {
  projects: [
    {
      title: "",
      description: "",
      color: "",
      owner: "",
      tasks: [],
      isFavourite: false,
      isArchived: false,
      isDeleted: false,
      collaborators: [],
      createdAt: "",
      updatedAt: ""
    }
  ],
  project: {
    title: "",
    description: "",
    color: "",
    owner: "",
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
    }
  }
};
