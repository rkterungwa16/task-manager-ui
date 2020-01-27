import { useState } from "react";
import ArchiveIcon from "react-ionicons/lib/IosArchiveOutline";
import ArrowDownIcon from "react-ionicons/lib/IosArrowRoundDown";
import ArrowUpIcon from "react-ionicons/lib/IosArrowRoundUp";
import EditIcon from "react-ionicons/lib/IosCreateOutline";
import FavoriteIcon from "react-ionicons/lib/IosHeartOutline";
import DeleteIcon from "react-ionicons/lib/IosTrashOutline";

import { Modal } from "../../Modal";
import { Button } from "../Button";
import {FormInput } from "../FormInput"
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
export const Dropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <DropdownItem onClick={() => setIsModalOpen(true)}>
          <ArrowUpIcon />
          <Text text="Add Project Above" style={dropdownItemTextStyle} />
        </DropdownItem>
        <DropdownItem>
          <ArrowDownIcon />
          <Text text="Add Project Below" style={dropdownItemTextStyle} />
        </DropdownItem>
        <Separator />
        <DropdownItem>
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
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {/* conditional render different form types based on item clicked */}
          <FormInput
            type="password"
            style={dropdownFormInputStyle}
            name="confirmPassword"
          />
          <Button text="Add" style={buttonStyle} />
        </Modal>
      )}
      <style jsx>
        {`
           {
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
        `}
      </style>
    </>
  );
};
