import * as React from "react";
export interface CircleProps {
  height: number;
}

export const CircleSpinner = (props: CircleProps) => {
  return (
    <div>
      <style jsx>
        {`
           {
            width: ${props.height}px;
            height: ${props.height}px;
            border: ${Math.floor(props.height / 3)}px solid rgba(0, 0, 0, 0.2);
            border-radius: 100%;
            animation: rotate 1.5s infinite linear;
          }
          :before {
            content: "";
            display: block;
            position: relative;
            left: -${Math.floor(props.height / 3)}px;
            top: -${Math.floor(props.height / 3)}px;
            height: 100%;
            width: 100%;
            border-radius: 100%;
            border-right: ${Math.floor(props.height / 3)}px solid
              rgba(0, 0, 0, 0.5);
            border-top: ${Math.floor(props.height / 3)}px solid transparent;
            border-left: ${Math.floor(props.height / 3)}px solid transparent;
            border-bottom: ${Math.floor(props.height / 3)}px solid transparent;
          }

          @keyframes rotate {
            from {
              transform: rotate(0);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};
