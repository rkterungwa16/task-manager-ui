import { mapToCssProperties, StyleProps } from "../../../utils";
export interface TextProps {
  text?: string;
  style?: StyleProps;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Text = (props: TextProps) => {
  return (
    <>
      <span onClick={props.onClick}>
        {props.text}
        {props.children}
      </span>
      <style jsx>
        {`
           {
            ${props.style ? mapToCssProperties(props.style) : null}
          }
        `}
      </style>
    </>
  );
};
