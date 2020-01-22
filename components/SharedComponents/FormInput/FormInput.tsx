
// TODO: Make background color dynamic for theme creation
export interface InputProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string | number | string[];
  color?: string;
  width?: number;
}
export const FormInput = (props: InputProps) => {
  return (
    <>
      <input
        className="form__input"
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
      />
      <style jsx>
        {
          `
          .form__input {
            display: flex;
            z-index: 3;
            align-self: center;
            margin-top: 10px;
            margin-bottom: 20px;
            background: #FFFFFF;
            border-radius: 8px;
            border: none;
            width: ${props.width}%;
            height: 48px;
            text-indent: 25px;
            font-size: 14px;
            line-height: normal;
            color: ${props.color};
            font-weight: 600;
            text-indent: 25px;
            letter-spacing: 1.5px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.15);
          }
          `
        }
      </style>
    </>
  )
}
