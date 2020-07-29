import { ActionStatus } from "../actions";
export interface ProjectType {
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

export interface ProjectState {
  projects: ProjectType[];
  actions: {
    addProject: ActionStatus;
    fetchUserProjects: ActionStatus;
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
  actions: {
    addProject: {
      isRequesting: false,
      error: ""
    },
    fetchUserProjects: {
      isRequesting: false,
      error: ""
    }
  }
};
