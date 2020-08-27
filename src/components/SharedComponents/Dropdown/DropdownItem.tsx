export interface DropdownItemProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const DropdownItem = (props: DropdownItemProps) => (
  <>
    <div onClick={props.onClick}>{props.children}</div>
    <style jsx>
      {`
         {
          padding: 10px 10px;
          text-decoration: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }
        :hover {
          background-color: #ededed;
        }
      `}
    </style>
  </>
);
