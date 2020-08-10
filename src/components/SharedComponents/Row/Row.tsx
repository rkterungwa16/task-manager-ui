import { mapToCssProperties, StyleProps } from "../../../utils";

export interface RowProps {
  children?: React.ReactNode;
  style?: StyleProps;
}
export const Row = (props: RowProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
        ${props.style ? mapToCssProperties(props.style) : ""}
      `}
    </style>
  </>
);
