import { useState, useCallback, useEffect } from "react";

import AddIcon from "react-ionicons/lib/IosAdd";
import ScheduleTaskIcon from "react-ionicons/lib/IosCalendarOutline";
import TaskPriorityIcon from "react-ionicons/lib/IosFlagOutline";
import TaskProjectIcon from "react-ionicons/lib/IosDocumentOutline";
import AddCollaboratorIcon from "react-ionicons/lib/IosPersonAddOutline";
import AddTaskCloseIcon from "react-ionicons/lib/IosClose";

import { Text, FormInput, Button, Tooltip, CircleSpinner } from "../SharedComponents";
import { Priorities } from "./Priority";
import { TaskType } from "../../models"
import { useProjectTasksApiActions } from "../../hooks";

import {
  taskInputStyle,
  taskInputFocusStyle,
  taskInputPlaceholderStyle,
  addTaskPillsHoverStyle,
  addTaskPillsStyle,
  addTaskSaveButton,
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

export const AddTask = (props: AddTaskProps) => {
  const [isOpen, setOpen] = useState(false);
  const [priorityDropdownIsOpen, openPriorityDropdown] = useState(false);
  const [task, setTask] = useState({
    description: "",
    priority: null,
    label: [""],
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
        <AddTaskInputWrapper>
          <FormInput
            type="text"
            style={taskInputStyle}
            placeHolderStyle={taskInputPlaceholderStyle}
            focusStyle={taskInputFocusStyle}
            name="description"
            // error={errors.content}
            onChange={handleChange}
            placeholder="e.g Buy gift tomorrow by 6pm errands highest priority #Errands"
          />
          <AddTaskExtraFields>
            <AddTaskExtraFieldsPills>
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
                    setPriority={(priority) => {
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
            </AddTaskExtraFieldsPills>
            <Button
              style={addTaskSaveButton}
              onClick={() => {
                // projectActions[props.action]();
                props.createProjectTasks(task, props.projectId)
              }}
              // disabled={props.description ? false : true}
            >
              {props.isRequesting ? <CircleSpinner height={10} /> : "Save"}
            </Button>
          </AddTaskExtraFields>
        </AddTaskInputWrapper>
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
export interface AddTaskInputWrapperProps {
  children?: React.ReactNode;
}

export const AddTaskInputWrapper = (props: AddTaskInputWrapperProps) => {
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
            margin-left: 25px;
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

export const AddTaskExtraFields = (props: AddTaskExtraFiledsProps) => {
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

export const AddTaskExtraFieldsPills = (
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
