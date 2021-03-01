import * as React from "react";
export interface TooltipItemProps {
  text: string;
  isVisible?: boolean;
  top?: number;
}

export const TooltipItem = (props: TooltipItemProps) => (
  <span>
    {props.text}
    <style jsx>
      {`
         {
          visibility: ${props.isVisible ? "visible" : "hidden"};
          width: 60px;
          background-color: #202020;
          color: #fff;
          text-align: center;
          border-radius: 4px;
          padding: 5px;
          position: absolute;
          top: ${props.top ? props.top : 30}px;
          z-index: 9999;
          font-size: 10px;
          right: -20px;
        }
      `}
    </style>
  </span>
);

TooltipItem.defaultProps = {
  isVisible: false,
  text: ""
};

export interface TooltipProps {
  children: React.ReactNode;
  text: string;
  top?: number;
}

export const Tooltip = (props: TooltipProps) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <TooltipItem text={props.text} isVisible={isOpen} top={props.top} />
      {props.children}
      <style jsx>
        {`
           {
            position: relative;
          }
        `}
      </style>
    </div>
  );
};
