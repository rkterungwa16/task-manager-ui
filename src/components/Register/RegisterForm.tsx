import Link from "next/link";
import {
  Button,
  CircleSpinner,
  FormInput,
  LinkButton,
  Text,
  Wrapper
} from "../SharedComponents";

import {
  alreadyHaveAnAccountTextStyle,
  buttonStyle,
  formWrapperStyle,
  getStartedTextStyle,
  inputTextStyle,
  linkButtonStyle,
  registerFormInputStyle,
  welcomeTextStyle
} from "./styles";

import {
  FormImageWrapper,
  FormWrapper,
  RegisterFormContainer,
  WelcomeTextWrapper
} from "./RegisterFormUtilTemplates";

import { useFormValidation, useRegistration} from "../../hooks";

export interface ValidatorInterface {
  func: (value: string) => boolean,
  error: string;
}
export interface StateValidatorSchemaInterface {
  [x: string]: {
    isEmpty?: ValidatorInterface;
    isString?: ValidatorInterface;
    isEmail?: ValidatorInterface;
    isValidPassword?: ValidatorInterface;
    isEqual?: {
      func: (password: string, confirmPassword: string) => boolean;
      error: string
    }
  }
};

export interface FormStateInterface {
  [x: string]: string;
}

export interface FormErrorInterface {
  [x: string]: string;
}
export const RegisterForm = () => {
  const defaultRegistrationState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const stateValidatorSchema = {
    name: {
      isEmpty: {
        func: value => Boolean(value.length),
        error: "Must not be empty"
      },
      isString: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid name format"
      },
    },
    email: {
      isEmpty: {
        func: value => Boolean(value.length),
        error: "Must not be empty"
      },
      isEmail: {
        func: value => (
          /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/
        ).test(value),
        error: "Invalid email format"
      }
    },
    password: {
      isEmpty: {
        func: value => Boolean(value.length),
        error: "Must not be empty"
      },
      isValidPassword: {
        func: value => (
          (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W\-_]{5,}$/).test(value)
        ),
        error: "Invalid password format: must be greater than 5"
      }
    },
    confirmPassword: {
      isEmpty: {
        func: value => Boolean(value.length),
        error: "Must not be empty"
      },
      isEqual: {
        func: (password: string, confirmPassword: string) => password === confirmPassword,
        error: "Password not the same"
      }
    }
  };

  const { user, createUser } = useRegistration();
  const {
    handleChange,
    formValues,
    errors,
  } = useFormValidation(defaultRegistrationState, stateValidatorSchema);

  const handleSubmit = () => {
    createUser(formValues);
  };
  return (
    <>
      <RegisterFormContainer>
        <Wrapper style={formWrapperStyle}>
          <FormImageWrapper>
            <img
              className="form-img"
              src="https://res.cloudinary.com/doy0uyv63/image/upload/v1579600963/task-manager-ico_inceiw.png"
              alt="Task Manager Icon"
            />
            <img
              src="https://res.cloudinary.com/doy0uyv63/image/upload/v1579521214/task-manager_zob3ne.png"
              alt="Task Manager"
            />
          </FormImageWrapper>
          <WelcomeTextWrapper>
            <Text text="Welcome!" style={welcomeTextStyle} />
            <Text
              text="Create your account to get started"
              style={getStartedTextStyle}
            />
          </WelcomeTextWrapper>
          <FormWrapper>
            <FormInput
              type="text"
              style={registerFormInputStyle}
              name="name"
              onChange={handleChange}
              error={errors.name}
              placeholder="Name"
            />
            <FormInput
              type="email"
              style={registerFormInputStyle}
              name="email"
              error={errors.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <FormInput
              type="password"
              style={registerFormInputStyle}
              name="password"
              error={errors.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <FormInput
              type="password"
              style={registerFormInputStyle}
              name="confirmPassword"
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Confirm Password"
            />

            <Button text="" style={buttonStyle} onClick={handleSubmit}>
              {user.actions.createUser.isRequesting ? (
                <CircleSpinner height={20} />
              ) : (
                  "Register"
                )}
            </Button>
            <Text style={alreadyHaveAnAccountTextStyle}>
              Already have an account?
              <Link href="/login">
                <LinkButton style={linkButtonStyle}>Login</LinkButton>
              </Link>
            </Text>
          </FormWrapper>
        </Wrapper>
      </RegisterFormContainer>
      <style jsx>{`
        .form-img {
          height: 50px;
        }

        .link__text;
      `}</style>
    </>
  );
};
