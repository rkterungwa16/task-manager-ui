import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Context = React.createContext(null);

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();
  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <ModalContainer>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </ModalContainer>
  );
}

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(Context);

  return modalNode
    ? ReactDOM.createPortal(
        <ModalOverlay>
          <ModalDialog {...props}>
            {children}
            <button onClick={onClose}>Close</button>
          </ModalDialog>
        </ModalOverlay>,
        modalNode
      )
    : null;
}

export interface ModalContainerProps {
  children?: React.ReactNode;
}

const ModalContainer = (props: ModalContainerProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
        position: relative;
        z-index: 0;
      `}
    </style>
  </div>
);

export interface ModalOverlayProps {
  children?: React.ReactNode;
}

export const ModalOverlay = (props: ModalOverlayProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
        animation: fadeIn 200ms ease-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
        }
      `}
    </style>
  </div>
);

export interface ModalDialogProps {
  children?: React.ReactNode;
}

export const ModalDialog = (props: ModalDialogProps) => (
  <div>
    {props.children}
    <style jsx>
      {`
        display: flex;
        flex-direction: column;
        background-color: #fff;
        min-width: 210px;
        border: 0px solid rgba(0, 0, 0, 0.25);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
        border-radius: 4px;
        background: white;
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      `}
    </style>
  </div>
);
