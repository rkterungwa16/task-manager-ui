import React, { useState, useCallback, useEffect } from "react";

import ScheduleTaskIcon from "react-ionicons/lib/IosCalendarOutline";
import TaskPriorityIcon from "react-ionicons/lib/IosFlagOutline";
import TaskProjectIcon from "react-ionicons/lib/IosDocumentOutline";
import AddCollaboratorIcon from "react-ionicons/lib/IosPersonAddOutline";

import { FormInput, Button, Tooltip, CircleSpinner } from "../../components";
import { Priorities } from "./Priority";
import { TaskType } from "../../models";
import { Priority } from "./constants";

import {
  taskInputStyle,
  taskInputFocusStyle,
  taskInputPlaceholderStyle,
  addTaskPillsHoverStyle,
  addTaskPillsStyle,
  taskEditorSaveButton
} from "./style";

export interface TaskEditorProps {
  // isOpen?: false;
  id?: string;
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
  editProjectTask?: (task: TaskType, projectId: string, taskId: string) => void;
  isRequesting?: boolean;
  type?: "edit" | "add";
  closeEditor?: () => void;
}

export const TaskEditor = (props: TaskEditorProps) => {
  const [priorityDropdownIsOpen, openPriorityDropdown] = useState(false);
  const [task, setTask] = useState({
    description: "",
    priority: null,
    label: [""]
  });

  useEffect(() => {
    if (props.description) {
      if (props.description !== task.description) {
        setTask(prevState => ({
          ...prevState,
          description: props.description
        }));
      }
    }
    if (props.priority) {
      if (props.priority !== task.priority) {
        setTask(prevState => ({
          ...prevState,
          priority: props.priority
        }));
      }
    }
  }, [props.description, props.priority]);

  const taskActions = {
    edit: useCallback(() => {
      props.editProjectTask(task, props.projectId, props.id);
    }, [props.projectId, JSON.stringify(task)]),
    add: useCallback(() => {
      props.createProjectTasks(task, props.projectId);
    }, [JSON.stringify(task), props.projectId])
  };

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
    <TaskEditorInputWrapper>
      <FormInput
        type="text"
        style={taskInputStyle}
        placeHolderStyle={taskInputPlaceholderStyle}
        focusStyle={taskInputFocusStyle}
        name="description"
        // error={errors.content}
        value={task.description}
        onChange={handleChange}
        placeholder="e.g Buy gift tomorrow by 6pm errands highest priority #Errands"
      />
      <TaskEditorExtraFields>
        <TaskEditorExtraFieldsPills>
          <Tooltip text="Schedule" top={40}>
            <Button
              style={addTaskPillsStyle}
              hoverStyle={addTaskPillsHoverStyle}
            >
              <ScheduleTaskIcon fontSize="25px" />
            </Button>
          </Tooltip>

          <Tooltip text="Project" top={40}>
            <Button
              style={addTaskPillsStyle}
              hoverStyle={addTaskPillsHoverStyle}
            >
              <TaskProjectIcon fontSize="25px" />
            </Button>
          </Tooltip>

          <IconWrapper>
            <Tooltip text="Priority: low, medium, high, highest" top={40}>
              <Button
                style={addTaskPillsStyle}
                hoverStyle={addTaskPillsHoverStyle}
                onClick={() => {
                  openPriorityDropdown(!priorityDropdownIsOpen);
                }}
              >
                <TaskPriorityIcon fontSize="25px" />
              </Button>
            </Tooltip>
            {priorityDropdownIsOpen && (
              <Priorities
                dropdownIsOpen={priorityDropdownIsOpen}
                priority={task.priority}
                setPriority={priority => {
                  setTask(prevState => ({
                    ...prevState,
                    priority
                  }));
                }}
                closeDropdown={() => {
                  openPriorityDropdown(false);
                }}
              />
            )}
          </IconWrapper>

          <Tooltip text="Assign Task" top={40}>
            <Button
              style={addTaskPillsStyle}
              hoverStyle={addTaskPillsHoverStyle}
            >
              <AddCollaboratorIcon fontSize="25px" />
            </Button>
          </Tooltip>
        </TaskEditorExtraFieldsPills>
        <ButtonWrapper>
          {props.type === "edit" ? (
            <Button
              style={taskEditorSaveButton}
              text="close"
              onClick={props.closeEditor}
            />
          ) : null}
          <Button
            style={taskEditorSaveButton}
            onClick={() => {
              taskActions[props.type]();
            }}
            disabled={task.description ? false : true}
          >
            {props.isRequesting ? <CircleSpinner height={10} /> : "Save"}
          </Button>
        </ButtonWrapper>
      </TaskEditorExtraFields>
    </TaskEditorInputWrapper>
  );
};

export interface AddTaskInputWrapperProps {
  children?: React.ReactNode;
}

export const TaskEditorInputWrapper = (props: AddTaskInputWrapperProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            width: 80%;
            border: 1px solid #8d8d8d;
            display: flex;
            flex-direction: column;
            padding: 5px;
            border-radius: 4px;
            margin-left: 20px;
          }
          @media screen and (max-width: 600px) {
             {
              width: 75%;
            }
          }
        `}
      </style>
    </div>
  );
};

export interface AddTaskExtraFiledsProps {
  children?: React.ReactNode;
}

export const TaskEditorExtraFields = (props: AddTaskExtraFiledsProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
          }
        `}
      </style>
    </div>
  );
};

export interface AddTaskExtraFieldsPillsProps {
  children?: React.ReactNode;
}

export const TaskEditorExtraFieldsPills = (
  props: AddTaskExtraFieldsPillsProps
) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export interface AddTaskSaveButtonWrapperProps {
  children?: React.ReactNode;
}

export const AddTaskSaveButtonWrapper = (
  props: AddTaskSaveButtonWrapperProps
) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
          }
        `}
      </style>
    </div>
  );
};

export interface IconWrapperProps {
  children?: React.ReactNode;
}
export const IconWrapper = (props: IconWrapperProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          position: relative;
        }
      `}
    </style>
  </div>
);

export const ButtonWrapper = props => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          display: flex;
        }
      `}
    </style>
  </div>
);
