import { useState, useCallback } from "react";

import AddIcon from "react-ionicons/lib/IosAdd";
import AddTaskCloseIcon from "react-ionicons/lib/IosClose";

import { Button, Tooltip } from "../SharedComponents";
import { TaskType } from "../../models";
import { TaskEditor } from "./TaskEditor";

import {
  addTaskIconFocusStyle,
  addTaskIconHoverStyle,
  addTaskIconStyle
} from "./style";

export enum Priority {
  low = 4,
  medium = 3,
  high = 2,
  highest = 1
}
export interface AddTaskProps {
  // isOpen?: false;
  description?: string;
  priority?: Priority;
  userId?: string;
  projectId?: string;
  label?: string[];
  completed?: boolean;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
  createProjectTasks?: (task: TaskType, projectId: string) => void;
  isRequesting?: boolean;
}

export const AddTaskEditor = (props: AddTaskProps) => {
  const [isOpen, setOpen] = useState(false);
  const [task, setTask] = useState({
    description: "",
    priority: null,
    label: [""]
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.currentTarget;
      const value =
        target.type === "checkbox" ? target.checked : (target.value as any);

      setTask(prevState => ({
        ...prevState,
        description: value
      }));
    },
    [task.description]
  );

  return (
    <AddTaskWrapper>
      <AddTaskLabel>
        {isOpen ? (
          <Button
            style={addTaskIconStyle}
            hoverStyle={addTaskIconHoverStyle}
            focusStyle={addTaskIconFocusStyle}
          >
            <AddTaskCloseIcon
              onClick={() => {
                setOpen(false);
              }}
              fontSize="30px"
            />
          </Button>
        ) : (
          <Tooltip text="Add Task">
            <Button
              style={addTaskIconStyle}
              hoverStyle={addTaskIconHoverStyle}
              focusStyle={addTaskIconFocusStyle}
            >
              <AddIcon
                onClick={() => {
                  setOpen(true);
                }}
                fontSize="30px"
              />
            </Button>
          </Tooltip>
        )}
      </AddTaskLabel>
      {isOpen ? (
        <TaskEditor
          isRequesting={props.isRequesting}
          description={props.description}
          createProjectTasks={props.createProjectTasks}
          projectId={props.projectId}
          type="add"
        />
      ) : null}
    </AddTaskWrapper>
  );
};

export interface AddTaskWrapperProps {
  children?: React.ReactNode;
}

export const AddTaskWrapper = (props: AddTaskWrapperProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 60%;
          }
          @media screen and (max-width: 600px) {
             {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

export interface AddTaskLabelProps {
  children?: React.ReactNode;
}

export const AddTaskLabel = (props: AddTaskLabelProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            display: flex;
            align-items: center;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};
