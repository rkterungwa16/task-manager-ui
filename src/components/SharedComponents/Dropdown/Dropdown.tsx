import { useState } from "react";
import ArchiveIcon from "react-ionicons/lib/IosArchiveOutline";
import ArrowDownIcon from "react-ionicons/lib/IosArrowRoundDown";
import ArrowUpIcon from "react-ionicons/lib/IosArrowRoundUp";
import EditIcon from "react-ionicons/lib/IosCreateOutline";
import FavoriteIcon from "react-ionicons/lib/IosHeartOutline";
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

export const Dropdown = () => {
  const defaultDropdownModalStates = {
    addProject: false,
    editProject: false,
    addToFavorite: false,
    deleteProject: false,
    archiveProject: false
  };
  const [isModalOpen, setIsModalOpen] = useState(defaultDropdownModalStates);
  return (
    <>
      <div>
        <DropdownItem
          onClick={() =>
            setIsModalOpen({ ...defaultDropdownModalStates, addProject: true })
          }
        >
          <ArrowUpIcon />
          <Text text="Add Project Above" style={dropdownItemTextStyle} />
        </DropdownItem>
        <DropdownItem
          onClick={() =>
            setIsModalOpen({ ...defaultDropdownModalStates, addProject: true })
          }
        >
          <ArrowDownIcon />
          <Text text="Add Project Below" style={dropdownItemTextStyle} />
        </DropdownItem>
        <Separator />
        <DropdownItem
          onClick={() =>
            setIsModalOpen({ ...defaultDropdownModalStates, editProject: true })
          }
        >
          <EditIcon />
          <Text text="Edit Project" style={dropdownItemTextStyle} />
        </DropdownItem>
        <DropdownItem>
          <FavoriteIcon />
          <Text text="Add to favorite" style={dropdownItemTextStyle} />
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
      {isModalOpen.addProject && (
        <DropdownModalContent
          headerText="Add project"
          onClick={() =>
            setIsModalOpen({ ...defaultDropdownModalStates, addProject: false })
          }
        >
          <FormInput
            type="password"
            style={dropdownFormInputStyle}
            name="confirmPassword"
          />
        </DropdownModalContent>
      )}
      {isModalOpen.editProject && (
        <DropdownModalContent
          headerText="Edit project"
          onClick={() =>
            setIsModalOpen({
              ...defaultDropdownModalStates,
              editProject: false
            })
          }
        >
          <FormInput
            type="password"
            style={dropdownFormInputStyle}
            name="confirmPassword"
          />
        </DropdownModalContent>
      )}
      <style jsx>
        {`
           {
            animation: fadeIn 200ms ease-out;
            display: block;
            position: absolute;
            background-color: #fff;
            min-width: 210px;
            right: 10px;
            z-index: 1;
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

export interface ModalHeaderProps {
  children?: React.ReactNode;
}

export const ModalHeader = (props: ModalHeaderProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          background-color: #ededed;
          color: #767676;
          font-size: 20px;
        }
      `}
    </style>
  </>
);

export interface RowProps {
  children?: React.ReactNode;
}
export const Row = (props: RowProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          display: flex;
          align-self: center;
          width: 80%;
          justify-content: space-between;
          padding: 15px;
        }
      `}
    </style>
  </>
);

export interface DropdownModalContentProps {
  children?: React.ReactNode;
  headerText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DropdownModalContent = (props: DropdownModalContentProps) => (
  <>
    <Modal onClose={props.onClick}>
      <ModalHeader>{props.headerText}</ModalHeader>
      {props.children}
      <Row>
        <Button text="add" style={buttonStyle} />
        <Button text="cancel" style={buttonStyle} onClick={props.onClick} />
      </Row>
    </Modal>
  </>
);
