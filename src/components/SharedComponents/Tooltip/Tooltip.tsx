import * as React from "react";
export interface TooltipItemProps {
  text: string;
  isVisible?: boolean;
}

export const TooltipItem = (props: TooltipItemProps) => (
  <span>
    {props.text}
    <style jsx>
      {`
         {
          visibility: ${props.isVisible ? "visible" : "hidden"};
          width: 80px;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 4px;
          padding: 5px;
          position: absolute;
          top: 30px;
          z-index: 9999;
          font-size: 10px;
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
      <TooltipItem text={props.text} isVisible={isOpen} />
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
