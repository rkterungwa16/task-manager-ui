import React, { useState } from "react";
import CalendarIcon from "react-ionicons/lib/IosCalendarOutline";
import EditIcon from "react-ionicons/lib/MdCreate";

import { Dropdown, FormInput, Text, Button } from "../../components";
import { TaskType } from "../../models";
import {
  taskTextStyle,
  taskIconHoverStyle,
  taskIconStyle,
  dueDateTextStyle
} from "./style";
import { TaskEditor } from "./TaskEditor";
import { Priority } from "./constants";

// TODO: Checkbox mark position for all screen sizes
export interface TaskInterface {
  name: string;
}

const taskCheckboxStyle = {
  border: "2px solid #767676",
  color: "transparent",
  transition: ".2s",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  backgroundColor: "#eee",
  display: "none"
};

export interface TaskProps {
  id?: string;
  description?: string;
  priority?: Priority;
  userId?: string;
  projectId?: string;
  label?: string[];
  completed?: boolean;
  dueDate?: string;
  editProjectTask?: (task: TaskType, projectId: string, taskId: string) => void;
  isRequesting?: boolean;
}
export const Task = (props: TaskProps) => {
  const [dropdownIsOpen, openDropdown] = useState(false);
  const [taskIsComplete, setTaskStatus] = useState(false);
  const [editorIsOpen, setEditorOpen] = useState(false);
  return (
    <>
      <li>
        {editorIsOpen ? (
          <TaskEditor
            id={props.id}
            type="edit"
            description={props.description}
            priority={props.priority}
            projectId={props.projectId}
            dueDate={props.dueDate}
            closeEditor={() => {
              setEditorOpen(false);
            }}
            isRequesting={props.isRequesting}
            editProjectTask={props.editProjectTask}
          />
        ) : (
          <>
            <TaskItemInnerWrapper>
              <CheckboxWrapper onClick={() => setTaskStatus(!taskIsComplete)}>
                {taskIsComplete && <CheckBoxMark />}
                <FormInput type="checkbox" style={taskCheckboxStyle} />
              </CheckboxWrapper>
              <Text
                onClick={() => {
                  setEditorOpen(true);
                }}
                text={props.description}
                style={taskTextStyle}
              />
              <TaskItemIconWrapper>
                <Button
                  style={taskIconStyle}
                  hoverStyle={taskIconHoverStyle}
                  onClick={() => {
                    setEditorOpen(true);
                  }}
                >
                  <EditIcon fontSize="22px" color="#8d8d8d" />
                </Button>
                <Button style={taskIconStyle} hoverStyle={taskIconHoverStyle}>
                  <CalendarIcon fontSize="25px" color="#8d8d8d" />
                </Button>
              </TaskItemIconWrapper>
            </TaskItemInnerWrapper>
            <ReminderWrapper>
              <Text style={dueDateTextStyle} text="Aug 7" />
            </ReminderWrapper>
          </>
        )}
      </li>
      <style jsx>
        {`
           {
            width: 100%;
            padding: 5px;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export interface TaskListProps {
  tasks: TaskType[];
  editProjectTask?: (task: TaskType, projectId: string, taskId: string) => void;
  isRequesting?: boolean;
  error?: string;
}

export const TaskList = (props: TaskListProps) => (
  <>
    <ul>
      {props.tasks.map(task => (
        <Task
          key={task._id}
          id={task._id}
          description={task.description}
          priority={task.priority}
          dueDate={task.dueDate}
          projectId={task.project}
          isRequesting={props.isRequesting}
          editProjectTask={props.editProjectTask}
        />
      ))}
    </ul>
    <style jsx>
      {`
         {
          width: 60%;
          list-style: none;
          padding: 0;
        }
        @media screen and (max-width: 600px) {
           {
            width: 90%;
          }
        }
      `}
    </style>
  </>
);

export interface TaskItemInnerWrapperProps {
  children?: React.ReactNode;
}

export const TaskItemInnerWrapper = (props: TaskItemInnerWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          cursor: pointer;
          height: 30px;
          padding: 5px 5px 5px 0;
          border-radius: 4px;
          width: 100%;
          display: flex;
          align-items: center;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
      `}
    </style>
  </>
);

export interface TaskItemIconWrapperProps {
  children?: React.ReactNode;
}

export const TaskItemIconWrapper = (props: TaskItemIconWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          display: flex;
          width: 70px;
          align-items: center;
          justify-description: space-evenly;
          margin-bottom: 5px;
          right: 400px;
        }
        @media screen and (max-width: 600px) {
           {
            right: 50px;
          }
        }
      `}
    </style>
  </>
);

export interface CheckboxWrapperProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CheckboxWrapper = (props: CheckboxWrapperProps) => (
  <>
    <div onClick={props.onClick}>
      {props.children}
      <style jsx>
        {`
           {
            border: 1px solid #767676;
            color: transparent;
            transition: 0.2s;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #eee;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  </>
);

export interface ReminderWrapperProps {
  children?: React.ReactNode;
}

export const ReminderWrapper = (props: ReminderWrapperProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            width: 84%;
            display: flex;
            justify-description: flex-end;
            color: #c23d38;
          }
        `}
      </style>
    </div>
  );
};

export const CheckBoxMark = () => (
  <span>
    <style jsx>
      {`
         {
          width: 14px;
          height: 14px;
          background-color: #767676;
          border-radius: 50%;
          position: absolute;
          left: 323px;
        }
        @media screen and (max-width: 600px) {
           {
            left: 28px;
          }
        }
      `}
    </style>
  </span>
);
