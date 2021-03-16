import { mapToCssProperties, StyleProps } from "../../utils";
import { defaultDropdownItemStyle } from "./style";
export interface DropdownItemProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: StyleProps;
}

export const DropdownItem = (props: DropdownItemProps) => (
  <>
    <div onClick={props.onClick} role="menuitem" tabIndex={0}>
      {props.children}
    </div>
    <style jsx>
      {`
         {
          ${props.style
            ? mapToCssProperties({
                ...defaultDropdownItemStyle,
                ...props.style
              })
            : mapToCssProperties(defaultDropdownItemStyle)}
        }
        :hover {
          background-color: #ededed;
        }
      `}
    </style>
  </>
);
