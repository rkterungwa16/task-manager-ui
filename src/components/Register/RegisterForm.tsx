import Link from "next/link";
import { useState } from "react";
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

import { useRegistration } from "../../hooks";

export const RegisterForm = () => {
  const defaultRegistrationState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const [registrationInput, setInputs] = useState(defaultRegistrationState);
  const { user, createUser } = useRegistration();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputs({ ...defaultRegistrationState, [name]: value });
  };
  const handleSubmit = () => {
    createUser(defaultRegistrationState);
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
              error="My name error"
              placeholder="Name"
            />
            <FormInput
              type="email"
              style={registerFormInputStyle}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <FormInput
              type="password"
              style={registerFormInputStyle}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <FormInput
              type="password"
              style={registerFormInputStyle}
              name="confirmPassword"
              onChange={handleChange}
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
