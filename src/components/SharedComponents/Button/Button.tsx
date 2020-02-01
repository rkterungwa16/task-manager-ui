import { mapToCssProperties, StyleProps } from "../../../utils";
export interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: StyleProps;
  hoverStyle?: StyleProps;
}

export interface ButtonStyleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  width?: number | string;
  color?: string;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => (
  <>
    <button onClick={props.onClick}>
      {props.children}
      {props.text}
    </button>
    <style jsx>{`
       {
        ${mapToCssProperties(props.style)}
      }
      :hover {
        ${props.hoverStyle ? mapToCssProperties(props.hoverStyle) : null}
      }
    `}</style>
  </>
);
