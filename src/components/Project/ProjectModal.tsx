import { useState, useCallback, useEffect, useRef } from "react";
import { Modal } from "../Modal";
import { Button, FormInput } from "../SharedComponents";
import { buttonStyle, projectModalFormInputStyle } from "./style";
import { ProjectColorsType } from "../../models";

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
  project?: {
    title?: string;
    color?: string;
    isFavourite?: boolean;
  };
  colors?: ProjectColorsType[];
  handleCancel?: () => void;
}

export const initialProjectState = {
  title: "",
  isFavourite: false,
  color: ""
}

export const ProjectModal = (props: ProjectModalProps) => {
  const [project, setProject] = useState(initialProjectState);
  const [colorPaletteIsVisible, showColorPalette] = useState(false);

  useEffect(() => {
    if (JSON.stringify(project) !== JSON.stringify(props.project)) {
      setProject(prevState => ({
        ...prevState,
        ...props.project
      }))
    }
  }, [JSON.stringify(props.project)]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.currentTarget;
      const value = target.type === 'checkbox' ? target.checked : target.value as any;
      const name = target.name;

      if (name === 'title') {
        setProject(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    }
  ,[JSON.stringify(project)]);

  return (
    <>
      <Modal onClose={props.handleCancel}>
        <ModalHeader>{props.headerText}</ModalHeader>
        <FormInput
          onChange={handleChange}
          value={props.project.title}
          type="text"
          style={projectModalFormInputStyle}
          name="title"
        />
        <Row>
          <Color
            handleClick={() => {
              showColorPalette(!colorPaletteIsVisible);
            }}
            color={project.color}
          />
          {
            colorPaletteIsVisible &&
            <ColorPalette
              colors={props.colors}
              handleClick={(color) => {
                setProject(prevState => ({
                  ...prevState,
                  color
                }))
              }}
            />
          }
        </Row>
        {props.children}
        <Row>
          <Button text="add" style={buttonStyle} />
          <Button text="cancel" style={buttonStyle} onClick={props.handleCancel} />
        </Row>
      </Modal>
    </>
  );
};
export interface ColorProps {
  color?: string;
  handleClick?: () => void;
}

export const Color = (props: ColorProps) => {
  return (
    <>
      <span onClick= {props.handleClick} />
      <style jsx>
        {
          `
          {
            background: ${props.color};
            height: 20px;
            width: 20px;
            cursor: pointer;
            position: relative;
            float: left;
            border-radius: 4px;
            margin: 2px;
          }
          `
        }
      </style>
    </>
  )
}

export interface ColorPaletteProps {
  colors?: ProjectColorsType[];
  handleClick?: (color: string) => void;
}

export const ColorPalette = (props: ColorPaletteProps) => {
  const colors = props.colors.map((color) => {
    return (
      <Color
        key={color.name}
        color={color.code}
        handleClick={() => {
          props.handleClick(color.code);
        }}
      />
    )
  })
  return (
    <div>
      {colors}
      <style jsx>
        {
          `
          {
            width: 120px;
            background: rgb(255, 255, 255);
            border: 0px solid rgba(0, 0, 0, 0.25);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
            border-radius: 4px;
            top: 165px;
            position: absolute;
            padding: 5px;
          }
          `
        }
      </style>
    </div>
  )
}
