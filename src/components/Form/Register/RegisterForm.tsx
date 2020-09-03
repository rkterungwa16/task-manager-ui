import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Button,
  CircleSpinner,
  FormInput,
  LinkButton,
  Text,
  Wrapper
} from "../../SharedComponents";

import {
  alreadyHaveAnAccountTextStyle,
  buttonStyle,
  formInputStyle,
  formWrapperStyle,
  getStartedTextStyle,
  linkButtonStyle,
  welcomeTextStyle
} from "../styles";

import {
  FormContainer,
  FormImageWrapper,
  FormWrapper,
  WelcomeTextWrapper
} from "../FormTemplates";

import { useFormValidation, useUserApiActions } from "../../../hooks";
import { registrationStateValidatorSchema as stateValidatorSchema } from "../validationSchema";

export const RegisterForm = () => {
  const defaultRegistrationState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { user, createUser } = useUserApiActions();
  const { handleChange, formValues, errors } = useFormValidation(
    defaultRegistrationState,
    stateValidatorSchema
  );

  useEffect(() => {
    const hasEmptyFormInput = Object.keys(formValues).some(value => {
      if (!formValues[value]) return true;
      return false;
    });

    const hasErrors = Object.keys(errors).some(error => {
      if (errors[error]) return true;
      return false;
    });

    if (hasErrors || hasEmptyFormInput) {
      setButtonDisabled(true);
    }

    if (!hasErrors && !hasEmptyFormInput) {
      setButtonDisabled(false);
    }
  }, [JSON.stringify(errors), JSON.stringify(formValues)]);

  const handleSubmit = () => {
    createUser(formValues);
  };

  return (
    <>
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
      <FormContainer>
        <Wrapper style={formWrapperStyle}>
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
              style={formInputStyle}
              name="name"
              onChange={handleChange}
              error={errors.name}
              placeholder="Name"
            />
            <FormInput
              type="email"
              style={formInputStyle}
              name="email"
              error={errors.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <FormInput
              type="password"
              style={formInputStyle}
              name="password"
              error={errors.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <FormInput
              type="password"
              style={formInputStyle}
              name="confirmPassword"
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Confirm Password"
            />

            <Button
              text=""
              style={buttonStyle}
              onClick={handleSubmit}
              disabled={buttonDisabled}
            >
              {user.actions.createUser.isRequesting ? (
                <CircleSpinner height={20} />
              ) : (
                "Register"
              )}
            </Button>
            <Text style={alreadyHaveAnAccountTextStyle}>
              Already have an account?
              <Link href="/login">
                <LinkButton style={linkButtonStyle} link="/login">
                  Login
                </LinkButton>
              </Link>
            </Text>
          </FormWrapper>
        </Wrapper>
      </FormContainer>
      <style jsx>{`
        .form-img {
          height: 50px;
        }

        .link__text;
      `}</style>
    </>
  );
};
