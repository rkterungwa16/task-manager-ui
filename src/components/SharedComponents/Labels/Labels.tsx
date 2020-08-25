import * as React from "react";
export interface LabelsProps {
  text?: string;
}
export const Labels = (props: LabelsProps) => {
  return (
    <label>
      {props.text}
      <style jsx>
        {`
           {
            color: #8d8d8d;
          }
        `}
      </style>
    </label>
  );
};
