import Link from "next/link";
import {
  Button,
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

export const RegisterForm = () => (
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
          <Text text="Name" style={inputTextStyle} />
          <FormInput type="text" style={registerFormInputStyle} name="name" />
          <Text text="Email" style={inputTextStyle} />
          <FormInput type="email" style={registerFormInputStyle} name="email" />
          <Text text="Password" style={inputTextStyle} />
          <FormInput
            type="password"
            style={registerFormInputStyle}
            name="password"
          />
          <Text text="Type Password Again" style={inputTextStyle} />
          <FormInput
            type="password"
            style={registerFormInputStyle}
            name="confirmPassword"
          />
          <Button text="Register" style={buttonStyle} />
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
