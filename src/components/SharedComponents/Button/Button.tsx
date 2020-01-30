import { mapToCssProperties, StyleProps } from "../../../utils";
export interface ButtonProps {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: StyleProps;
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
    <button onClick={props.onClick}>{props.text}</button>
    <style jsx>{`
       {
        ${mapToCssProperties(props.style)}
      }
    `}</style>
  </>
);
