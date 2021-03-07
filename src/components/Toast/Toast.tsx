import React, {
  useEffect,
  useRef,
  createContext,
  useState,
  useContext
} from "react";
import { createPortal } from "react-dom";

import { Button } from "../";

export const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();
  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <>
      <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export const ToastContainer = ({ children, remove }) => {
  const removeRef = useRef(null);
  removeRef.current = remove;
  useEffect(() => {
    const duration = 5000;
    setTimeout(() => removeRef.current(), duration);
  }, []);

  return (
    <ToastWrapper>
      <ToastText>{children}</ToastText>
      <Button text="" style={toastCloseBtnStyle} onClick={remove}>
        x
      </Button>
    </ToastWrapper>
  );
};

export interface ToastContainerProps {
  isOpen: boolean;
  message: string;
  handleRemove?: () => void;
}

export const Toast = (props: ToastContainerProps) => {
  const toastNode = useContext(ToastContext);
  const [toastIsOpen, setToastOpen] = useState(false);
  useEffect(() => {
    if (toastIsOpen !== props.isOpen) {
      setToastOpen(props.isOpen);
    }
  }, [props.isOpen]);

  const remove = () => {
    setToastOpen(false);
    props.handleRemove();
  };

  return (
    <>
      {toastNode
        ? createPortal(
            <ToastContainerWrapper>
              {toastIsOpen && (
                <ToastContainer remove={() => remove()}>
                  {props.message}
                </ToastContainer>
              )}
            </ToastContainerWrapper>,
            toastNode
          )
        : null}
    </>
  );
};

export interface ToastContainerWrapperProps {
  children?: React.ReactNode;
}
export const ToastContainerWrapper = (props: ToastContainerWrapperProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          position: absolute;
          top: 20px;
          right: 20px;
        }
      `}
    </style>
  </div>
);

export const toastCloseBtnStyle = {
  border: "none",
  backgroundColor: "transparent",
  fontSize: "16px",
  marginTop: "8px",
  marginRight: "8px",
  cursor: "pointer"
};

export interface ToastWrapperProps {
  children?: React.ReactNode;
}

export const ToastWrapper = (props: ToastWrapperProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          border: 2px solid transparent;
          background-color: #fafafa;
          border-radius: 4px;
          max-width: 480px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          margin-top: 16px;
          display: flex;
          position: relative;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

export interface ToastTextProps {
  children?: React.ReactNode;
}

export const ToastText = (props: ToastTextProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
         {
          padding: 16px 24px;
          line-height: 1.4;
        }
      `}
    </style>
  </div>
);
