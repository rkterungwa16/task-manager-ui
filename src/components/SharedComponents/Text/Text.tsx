import { mapToCssProperties, StyleProps } from "../../../utils";
export interface TextProps {
  text?: string;
  style?: StyleProps;
  children?: React.ReactNode;
}

export const Text = (props: TextProps) => {
  return (
    <>
      <span>
        {props.text}
        {props.children}
      </span>
      <style jsx>
        {`
          {
            ${mapToCssProperties(props.style)}
          }
        `}
      </style>
    </>
  );
};
