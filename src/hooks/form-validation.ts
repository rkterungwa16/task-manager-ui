import { useCallback, useState } from "react";

export interface StateValidatorSchemaInterface {
  [x: string]: {
    isEmpty?: ValidatorInterface;
    isString?: ValidatorInterface;
    isEmail?: ValidatorInterface;
    isValidPassword?: ValidatorInterface;
    isEqual?: {
      func: (password: string, confirmPassword: string) => boolean;
      error: string;
    };
  };
}

export interface ValidatorInterface {
  func: (value: string) => boolean;
  error: string;
}

export interface StateSchemaInterface {
  [x: string]: string;
}

export function useFormValidation(
  stateSchema: StateSchemaInterface,
  stateValidatorSchema: StateValidatorSchemaInterface
) {
  const [formValues, setValues] = useState(stateSchema);
  const [errors, setErrors] = useState(stateSchema);

  const validateFormFields = useCallback(
    (name: string, value: string) => {
      const validator = stateValidatorSchema;
      const field = validator[name];
      let error = "";
      if (field.isEmpty) {
        error = !field.isEmpty.func(value) ? field.isEmpty.error : "";
      }

      if (field.isString) {
        error = !field.isString.func(value) ? field.isString.error : "";
      }

      if (field.isEmail) {
        error = !field.isEmail.func(value) ? field.isEmail.error : "";
      }

      if (field.isValidPassword) {
        error = !field.isValidPassword.func(value)
          ? field.isValidPassword.error
          : "";
      }

      console.log("formValues___", formValues);
      if (field.isEqual) {
        error = !field.isEqual.func(
          formValues.password,
          formValues.confirmPassword
        )
          ? field.isEqual.error
          : "";
      }
      return error;
    },
    [stateValidatorSchema, formValues]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      console.log("name", name);
      console.log("value", value);
      const error = validateFormFields(name, value.trim());

      setValues(prevState => ({ ...prevState, [name]: value }));
      setErrors(prevState => ({ ...prevState, [name]: error }));
    },
    [validateFormFields]
  );

  // const [disable, setDisable] = useState(true);

  // useEffect(() => {
  //   setDisable(true); // Disable button in initial render.
  // }, []); // eslint-disable-line

  return {
    handleChange,
    formValues,
    errors
    // disable,
  };
}
