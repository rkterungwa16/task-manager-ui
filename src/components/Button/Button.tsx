import * as React from "react";

import { mapToCssProperties, StyleProps } from "../../utils";
export interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: StyleProps;
  hoverStyle?: StyleProps;
  focusStyle?: StyleProps;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
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
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
      {props.text}
    </button>
    <style jsx>{`
       {
        ${props.style ? mapToCssProperties(props.style) : ""}
      }
      :hover {
        ${props.hoverStyle ? mapToCssProperties(props.hoverStyle) : null}
      }
      :focus {
        ${props.focusStyle
          ? mapToCssProperties({ outline: "none", ...props.focusStyle })
          : mapToCssProperties({ outline: "none" })}
      }
      :disabled {
        background: #c23d3891;
      }
    `}</style>
  </>
);

Button.defaultProps = {
  type: "button"
}

export default Button;
