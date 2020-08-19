import { mapToCssProperties, StyleProps } from "../../../utils";
// TODO: Make background color dynamic for theme creation
export interface InputProps {
  disabled?: boolean;
  error?: string;
  helperText?: React.ReactNode;
  id?: string;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  name?: string;
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  onFocus?: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string | number | string[];
  style?: StyleProps;
  placeHolderStyle?: StyleProps;
  focusStyle?: StyleProps;
}

export const FormInput = (props: InputProps) => {
  return (
    <>
      <InputWrapper>
        <input
          type={props.type}
          onChange={props.onChange}
          onFocus={props.onFocus}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
        />
        <InputErrorText text={props.error} />
      </InputWrapper>
      <style jsx>
        {`
           {
            ${props.style ? mapToCssProperties(props.style) : ""}
          }

          ::placeholder {
            ${props.placeHolderStyle
              ? mapToCssProperties(props.placeHolderStyle)
              : ""}
          }

          :focus {
            ${props.focusStyle ? mapToCssProperties(props.focusStyle) : ""}
          }
        `}
      </style>
    </>
  );
};

export interface InputErrorTextProps {
  text?: string;
  style?: StyleProps;
}

export const InputErrorText = (props: InputErrorTextProps) => (
  <>
    <span>{props.text}</span>
    <style jsx>
      {`
         {
          width: 80%;
          align-self: center;
          display: flex;
          font-size: 12px;
          color: #c23d38;
          text-transform: lowercase;
        }
      `}
    </style>
  </>
);

export interface InputWrapperProps {
  children?: React.ReactNode;
}

export const InputWrapper = (props: InputWrapperProps) => (
  <>
    <div>{props.children}</div>
    <style jsx>
      {`
         {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      `}
    </style>
  </>
);
