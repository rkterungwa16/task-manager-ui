import * as React from "react";
export interface FormContainerProps {
  children?: React.ReactNode;
}
export const FormContainer = (props: FormContainerProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          display: flex;
          background-color: white;
          justify-content: center;
        }
      `}
    </style>
  </>
);

export interface FormImageWrapperProps {
  children?: React.ReactNode;
}

export const FormImageWrapper = (props: FormImageWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          position: relative;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
      `}
    </style>
  </>
);

export interface WelcomeTextWrapperProps {
  children?: React.ReactNode;
}
export const WelcomeTextWrapper = (props: WelcomeTextWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          position: relative;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
      `}
    </style>
  </>
);

export interface FormWrapperProps {
  children?: React.ReactNode;
}

export const FormWrapper = (props: FormImageWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          margin-top: 20px;
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 100%;
        }
      `}
    </style>
  </>
);
