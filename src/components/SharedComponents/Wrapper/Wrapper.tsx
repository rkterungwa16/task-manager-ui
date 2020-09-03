import * as React from "react";
import { mapToCssProperties, StyleProps } from "../../../utils";
export interface WrapperProps {
  style?: StyleProps;
  children?: React.ReactNode;
  className?: string;
}

export const Wrapper = (props: WrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          ${mapToCssProperties(props.style)}
        }
        @media only screen and (max-width: 992px) {
          width: 40%;
        }
        @media only screen and (max-width: 768px) {
          width: 50%;
        }
        @media only screen and (max-width: 600px) {
          width: 60%;
        }

        @media only screen and (max-width: 600px) {
          width: 80%;
        }
      `}
    </style>
  </>
);
