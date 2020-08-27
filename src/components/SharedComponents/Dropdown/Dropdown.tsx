import { useRef } from "react";

import { useClickOutside } from "../../../hooks";
import { mapToCssProperties, StyleProps } from "../../../utils";
import { defaultDropdownStyle } from "./style";

export interface DropdownProps {
  children?: React.ReactNode;
  closeDropdown?: () => void;
  style?: StyleProps;
}

export const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, props.closeDropdown);
  return (
    <>
      <div ref={dropdownRef}>
        {props.children}
      </div>
      <style jsx>
        {`
          {
            ${
              props.style ?
              mapToCssProperties({...defaultDropdownStyle, ...props.style}) :
              mapToCssProperties(defaultDropdownStyle)
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};
