import { useState } from "react";

import AddIcon from "react-ionicons/lib/IosAdd";
import ScheduleTaskIcon from "react-ionicons/lib/IosCalendarOutline";
import TaskPriorityIcon from "react-ionicons/lib/IosFlagOutline";
import TaskProjectIcon from "react-ionicons/lib/IosDocumentOutline";
import AddCollaboratorIcon from "react-ionicons/lib/IosPersonAddOutline";
import AddTaskCloseIcon from "react-ionicons/lib/IosClose";

import { Text, FormInput, Button } from "../SharedComponents";

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

export interface AddTaskProps {
  // isOpen?: false;
}

export const AddTask = (props: AddTaskProps) => {
  const [isOpen, setOpen] = useState(false);
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
        )}
        <Text text="Add Task" />
      </AddTaskLabel>
      {isOpen ? (
        <AddTaskInputWrapper>
          <FormInput
            type="text"
            style={taskInputStyle}
            placeHolderStyle={taskInputPlaceholderStyle}
            focusStyle={taskInputFocusStyle}
            name="content"
            // error={errors.content}
            // onChange={handleChange}
            placeholder="e.g Buy gift tomorrow by 6pm errands p1 #Errands"
          />
          <AddTaskExtraFields>
            <AddTaskExtraFieldsPills>
              <Button
                style={addTaskPillsStyle}
                hoverStyle={addTaskPillsHoverStyle}
              >
                <ScheduleTaskIcon fontSize="25px" />
              </Button>
              <Button
                style={addTaskPillsStyle}
                hoverStyle={addTaskPillsHoverStyle}
              >
                <TaskProjectIcon fontSize="25px" />
              </Button>
              <Button
                style={addTaskPillsStyle}
                hoverStyle={addTaskPillsHoverStyle}
              >
                <TaskPriorityIcon fontSize="25px" />
              </Button>
              <Button
                style={addTaskPillsStyle}
                hoverStyle={addTaskPillsHoverStyle}
              >
                <AddCollaboratorIcon fontSize="25px" />
              </Button>
            </AddTaskExtraFieldsPills>
            <Button style={addTaskSaveButton} text="save" />
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
