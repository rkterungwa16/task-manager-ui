
export interface WrapperProps {
  style?: WrapperStyleProps;
  children?: React.ReactNode;
  className?: string;
}

export interface WrapperStyleProps {
  display?: string;
  position?: string;
  width?: string | number;
  height?: string | number;
  flexDirection?: string | number;
  padding?: number;
  backgroundColor?: string;
}
export const Wrapper = (props: WrapperProps) => (
  <>
    <div className="wrapper">
      {props.children}
    </div>
    <style jsx>
      {
        `
        .wrapper {
          display: ${props.style.display};
          position: ${props.style.position};
          width: ${props.style.width};
          height: ${props.style.height};
          flex-direction: ${props.style.flexDirection};
          padding: ${props.style.padding}px;
          background-color: ${props.style.backgroundColor};
        }
        `
      }
    </style>
  </>
)
