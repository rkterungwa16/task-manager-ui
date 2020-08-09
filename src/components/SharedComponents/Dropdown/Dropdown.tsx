import { useState, useEffect, useRef } from "react";
import ArchiveIcon from "react-ionicons/lib/IosArchiveOutline";
import EditIcon from "react-ionicons/lib/IosCreateOutline";
import DeleteIcon from "react-ionicons/lib/IosTrashOutline";

import { Modal } from "../../Modal";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { DropdownItem } from "./DropdownItem";
import { buttonStyle, dropdownFormInputStyle } from "./style";

const dropdownItemTextStyle = {
  fontSize: "16px",
  color: "#8d8d8d",
  fontWeight: "100",
  marginLeft: "5px"
};

export interface DefaultDropdownModalStateInterface {
  addProjectAbove?: boolean;
  addProjectBelow?: boolean;
  editProject?: boolean;
  addToFavorite?: boolean;
  deleteProject?: boolean;
  archiveProject?: boolean;
}

export interface DropdownProps {
  handleEditProjectModalOpen?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
  return (
    <>
      <div>
        <DropdownItem onClick={props.handleEditProjectModalOpen}>
          <EditIcon />
          <Text text="Edit Project" style={dropdownItemTextStyle} />
        </DropdownItem>
        <Separator />
        <DropdownItem>
          <DeleteIcon />
          <Text text="Delete Project" style={dropdownItemTextStyle} />
        </DropdownItem>
        <DropdownItem>
          <ArchiveIcon />
          <Text text="Archive Project" style={dropdownItemTextStyle} />
        </DropdownItem>
      </div>
      <style jsx>
        {`
           {
            animation: fadeIn 200ms ease-out;
            display: block;
            position: absolute;
            background-color: #fff;
            min-width: 210px;
            right: 10px;
            border: 0px solid rgba(0, 0, 0, 0.25);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
            border-radius: 4px;
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
