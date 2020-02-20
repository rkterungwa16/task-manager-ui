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
  linkButtonStyle
} from "../styles";

import { FormContainer, FormImageWrapper, FormWrapper } from "../FormTemplates";

import { useFormValidation, useUserApiActions } from "../../../hooks";
import { loginStateValidatorSchema as stateValidatorSchema } from "../validationSchema";

export const LoginForm = () => {
  const defaultLoginState = {
    email: "",
    password: ""
  };

  const { user, authenticateUser } = useUserApiActions();
  const { handleChange, formValues, errors } = useFormValidation(
    defaultLoginState,
    stateValidatorSchema
  );

  const handleSubmit = () => {
    authenticateUser(formValues);
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
          <FormWrapper>
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

            <Button text="" style={buttonStyle} onClick={handleSubmit}>
              {user.actions.authenticateUser.isRequesting ? (
                <CircleSpinner height={20} />
              ) : (
                "Login"
              )}
            </Button>
            <Text style={alreadyHaveAnAccountTextStyle}>
              Create an account
              <Link href="/register">
                <LinkButton style={linkButtonStyle} link="/register">
                  Register
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
