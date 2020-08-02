import { useState } from "react";
import CheckMarkIcon from "react-ionicons/lib/IosCheckmark";
import CalendarIcon from "react-ionicons/lib/IosCalendarOutline";
import EditIcon from "react-ionicons/lib/MdCreate";
import uniqid from "uniqid";

import { Dropdown, FormInput, Text } from "../SharedComponents";
import { TaskType } from "../../models";
import { taskTextStyle } from "./style";

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
  content?: string;
}
export const Task = (props: TaskProps) => {
  const [dropdownIsOpen, openDropdown] = useState(false);
  const [taskIsComplete, setTaskStatus] = useState(false);
  return (
    <>
      <li>
        <TaskItemInnerWrapper>
          <CheckboxWrapper onClick={() => setTaskStatus(!taskIsComplete)}>
            {taskIsComplete && (
              <CheckMarkIcon fontSize="500px" color="#767676" />
            )}
            <FormInput type="checkbox" style={taskCheckboxStyle} />
          </CheckboxWrapper>
          <Text text={props.content} style={taskTextStyle} />
          <TaskItemIconWrapper>
            <EditIcon
              fontSize="22px"
              color="#8d8d8d"
            />
            <CalendarIcon
              fontSize="25px"
              color="#8d8d8d"
            />
          </TaskItemIconWrapper>
        </TaskItemInnerWrapper>
        {dropdownIsOpen && <Dropdown />}
      </li>
      <style jsx>
        {`
           {
            width: 100%;
            padding: 5px;
          }
        `}
      </style>
    </>
  );
};

export interface TaskListProps {
  tasks: TaskType[];
}

export const TaskList = (props: TaskListProps) => (
  <>
    <ul>
      {props.tasks.map(task => (
        <Task key={uniqid(`${task.content} - `)} content={task.content} />
      ))}
    </ul>
    <style jsx>
      {`
         {
          width: 70%;
          list-style: none;
          padding: 0;
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
          height: 40px;
          padding: 5px 5px 5px 0;
          border-radius: 4px;
          background-color: #fff;
          width: 100%;
          display: flex;
          align-items: center;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        :hover {
          background-color: #fff;
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
           justify-content: space-evenly;
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
            border: 3px solid #767676;
            color: transparent;
            transition: 0.2s;
            width: 30px;
            height: 30px;
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
