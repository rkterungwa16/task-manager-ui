import React, { Ref } from "react";

import { mapToCssProperties, StyleProps } from "../../../utils";
export interface LinkButtonProps {
  children?: React.ReactNode;
  link?: string;
  style?: StyleProps;
}
export const LinkButton = React.forwardRef(
  (props: LinkButtonProps, ref: Ref<any>) => (
    <>
      <a ref={ref} href={props.link ? props.link : ""}>
        {props.children}
      </a>
      <style jsx>
        {`
           {
            ${mapToCssProperties(props.style)}
          }
        `}
      </style>
    </>
  )
);
