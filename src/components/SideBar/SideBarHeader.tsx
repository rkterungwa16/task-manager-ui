import Add from "react-ionicons/lib/IosAdd";
import ArrowDown from "react-ionicons/lib/IosArrowDown";
import ArrowForward from "react-ionicons/lib/IosArrowForward";

import { Button, Text } from "../SharedComponents";
import {
  sidebarHeaderButtonHoverStyle,
  sidebarHeaderButtonStyle,
  sidebarProjectTextStyle
} from "./style";

export interface SideBarHeaderProps {
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  openProjectList?: boolean;
}
export const SideBarHeader = (props: SideBarHeaderProps) => (
  <>
    <header>
      <Button
        style={sidebarHeaderButtonStyle}
        hoverStyle={sidebarHeaderButtonHoverStyle}
        onClick={props.onClick}
      >
        {props.openProjectList && <ArrowDown fontSize="20px" />}
        {!props.openProjectList && <ArrowForward fontSize="20px" />}
        <Text text="Projects" style={sidebarProjectTextStyle} />
      </Button>
      <Add fontSize="30px" />
    </header>
    <style jsx>{`
       {
        border-bottom: 1px solid #e1e1e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    `}</style>
  </>
);
