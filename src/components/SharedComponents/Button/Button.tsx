import { mapToCssProperties, StyleProps } from "../../../utils";
export interface ButtonProps {
  text?: string;
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
    <button>{props.text}</button>
    <style jsx>{`
       {
        ${mapToCssProperties(props.style)}
      }
    `}</style>
  </>
);
