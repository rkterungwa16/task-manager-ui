import * as React from "react";
export interface SwitchProps {
  inputRef?: React.Ref<any> | React.RefObject<any>;
  name?: string;
  handleChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  checked?: boolean;
}

export const Switch = (props: SwitchProps) => {
  return (
    <>
      <SwitchLabel>
        <SwitchSlider checked={props.checked}>
          <SwitchInput
            checked={props.checked}
            handleChange={props.handleChange}
            name={props.name}
          />
        </SwitchSlider>
      </SwitchLabel>
    </>
  );
};

export interface SwitchLabelProps {
  children?: React.ReactNode;
}
export const SwitchLabel = (props: SwitchLabelProps) => {
  return (
    <label>
      {props.children}
      <style jsx>
        {`
           {
            display: inline-block;
            width: 40px;
            height: 26px;
          }
        `}
      </style>
    </label>
  );
};

export interface SwitchInputProps {
  children?: React.ReactNode;
  handleChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  checked?: boolean;
  name?: string;
}

export const SwitchInput = (props: SwitchInputProps) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={props.handleChange}
        checked={props.checked}
        name={props.name}
      />
      <style jsx>
        {`
           {
            ${props.checked ? "border-color: #2819ae;" : ""}
            display: none;
          }
        `}
      </style>
    </>
  );
};

export interface SwitchSliderProps {
  children?: React.ReactNode;
  checked?: boolean;
}
export const SwitchSlider = (props: SwitchSliderProps) => {
  return (
    <span>
      {props.children}
      <style jsx>
        {`
          {
            position: relative;
            display: block;
            height: inherit;
            cursor: pointer;
            border: 1px solid #d8dbe0;
            border-radius: .25rem;
            transition: .15s ease-out;
            ${
              props.checked
                ? "background-color: #c23d38;"
                : "background-color: #fff;"
            }
          }
          ::before {
            position: absolute;
            top: 3px;
            left: 2px;
            box-sizing: border-box;
            width: 20px;
            height: 20px;
            content: "";
            border: 1px solid #d8dbe0;
            border-radius: .125rem;
            ${
              !props.checked
                ? "background-color: #c23d38;"
                : "background-color: #fff;"
            }
            ${props.checked ? "-webkit-transform: translateX(14px);" : ""}
            ${props.checked ? "transform: translateX(14px);" : ""}
            transition: .15s ease-out;
          }
          `}
      </style>
    </span>
  );
};
