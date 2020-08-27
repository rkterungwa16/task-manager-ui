import { useState, useEffect } from "react";
import { Dropdown, Text, DropdownItem } from "../SharedComponents";
import {
  priorityTextStyle,
  priorityDropdownItemStyle,
  priorityDropdownStyle
} from "./style";

export const priorities = [
  {
    name: "highest",
    code: 1,
    color: "#d1453b"
  },
  {
    name: "high",
    code: 2,
    color: "#EB8909"
  },
  {
    name: "medium",
    code: 3,
    color: "#246fe0"
  },
  {
    name: "low",
    code: 4,
    color: "#fff"
  }
];
export interface PrioritiesProps {
  dropdownIsOpen?: boolean;
}
export const Priorities = (props: PrioritiesProps) => {
  const [dropdownIsOpen, openDropdown] = useState(false);
  const [code, setCode] = useState(4);

  useEffect(() => {
    if (props.dropdownIsOpen !== dropdownIsOpen) {
      openDropdown(props.dropdownIsOpen);
    }
  }, [props.dropdownIsOpen]);

  return (
    <Dropdown
      style={priorityDropdownStyle}
      closeDropdown={() => {
        openDropdown(false);
      }}
    >
      {priorities.map(priority => {
        return (
          <DropdownItem
            key={`${priority.name}-${priority.color}`}
            style={
              priority.code === code
                ? { ...priorityDropdownItemStyle, backgroundColor: "#ededed" }
                : priorityDropdownItemStyle
            }
            onClick={() => {
              setCode(priority.code);
            }}
          >
            <PriorityDot color={priority.color} />
            <Text text={priority.name} style={priorityTextStyle} />
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};

export interface PriorityDotProps {
  color?: string;
}

export const PriorityDot = (props: PriorityDotProps) => {
  return (
    <span>
      <style jsx>
        {`
           {
            background: ${props.color ? props.color : "#fff"};
            height: 5px;
            width: 5px;
            border-radius: 50%;
            margin-right: 10px;
          }
        `}
      </style>
    </span>
  );
};
