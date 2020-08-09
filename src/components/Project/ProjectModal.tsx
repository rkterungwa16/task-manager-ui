import { Modal } from "../Modal";
import { Button } from "../SharedComponents";
import { buttonStyle } from "./style";

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
          width: 100%;
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

export interface ProjectModalProps {
  children?: React.ReactNode;
  headerText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ProjectModal = (props: ProjectModalProps) => {
  return (
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
};
