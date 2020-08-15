import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { useClickOutside } from "../../hooks";

const Context = React.createContext(null);

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();
  useEffect(() => {
    setContext(modalRef.current);
  }, [modalRef.current]);
  return (
    <ModalContainer>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </ModalContainer>
  );
}

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(Context);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, props.handleCancel);
  return modalNode
    ? ReactDOM.createPortal(
        <ModalOverlay>
          <ModalDialog {...props} onClose={onClose}>
            {children}
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

export const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {`
           {
            animation: fadeIn 200ms ease-out;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.3);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export interface ModalDialogProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

export const ModalDialog = (props: ModalDialogProps) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, props.onClose);
  return (
    <div ref={dropdownRef}>
      {props.children}
      <style jsx>
        {`
          display: flex;
          flex-direction: column;
          background-color: #fff;
          min-width: 270px;
          border: 0px solid rgba(0, 0, 0, 0.25);
          box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
          border-radius: 4px;
          background: white;
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);
          z-index: 1;
          align-items: center !important;

          @media screen and (max-width: 600px) {
             {
              top: 50%;
            }
          }
        `}
      </style>
    </div>
  );
};
