import { mapToCssProperties, StyleProps } from "../../../utils";
// TODO: Make background color dynamic for theme creation
export interface InputProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  name?: string;
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string | number | string[];
  style?: StyleProps;
}

export const FormInput = (props: InputProps) => {
  return (
    <>
      <input
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
      />
      <style jsx>
        {`
          ${mapToCssProperties(props.style)}
        `}
      </style>
    </>
  );
};
