import React, { Ref } from "react";

import { mapToCssProperties, StyleProps } from "../../../utils";
export interface LinkButtonProps {
  children?: React.ReactNode;
  style?: StyleProps;
}
export const LinkButton = React.forwardRef(
  (props: LinkButtonProps, ref: Ref<any>) => (
    <>
      <a ref={ref}>{props.children}</a>
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
