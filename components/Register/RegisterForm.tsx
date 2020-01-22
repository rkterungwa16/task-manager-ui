import Link from "next/link";
import {
  FormInput,
  Text,
  Button,
  Wrapper
} from "../SharedComponents";

import {
  welcomeTextStyle,
  getStartedTextStyle,
  inputTextStyle,
  buttonStyle,
  alreadyHaveAnAccountTextStyle,
  formWrapperStyle
} from "./styles";

const RegisterForm = () => (
  <>
    <div className="form__container">
      <Wrapper
        style={formWrapperStyle}
      >
        <div className="form-image__wrapper">
          <img
            className="form-img"
            src="https://res.cloudinary.com/doy0uyv63/image/upload/v1579600963/task-manager-ico_inceiw.png"
            alt="Task Manager Icon"
          />
          <img
            src="https://res.cloudinary.com/doy0uyv63/image/upload/v1579521214/task-manager_zob3ne.png"
            alt="Task Manager"
          />
        </div>
        <div className="welcome-text__wrapper">
          <Text
            text="Welcome!"
            style={welcomeTextStyle}
          />
          <Text
            text="Create your account to get started"
            style={getStartedTextStyle}
          />
        </div>
        <div className="form__wrapper">
          <Text
            text="Name"
            style={inputTextStyle}
          />
          <FormInput
            type="text"
            color="#767676"
            width={80}
            name="name"
          />
          <Text
            text="Email"
            style={inputTextStyle}
          />
          <FormInput
            type="email"
            color="#767676"
            width={80}
            name="email"
          />
          <Text
            text="Password"
            style={inputTextStyle}
          />
          <FormInput
            type="password"
            color="#767676"
            width={80}
            name="password"
          />
          <Text
            text="Type Password Again"
            style={inputTextStyle}
          />
          <FormInput
            type="password"
            color="#767676"
            width={80}
            name="confirmPassword"
          />
          <Button
            text="Register"
            style={buttonStyle}
          />
          <Text
            style={alreadyHaveAnAccountTextStyle}
          >
            Already have an account?
              <Link href="/login">
              <a className="link__text">Login</a>
            </Link>
          </Text>
        </div>
      </Wrapper>
    </div>
    <style jsx>{
      `.form__container {
        display: flex;
        background-color: white;
        justify-content: center;
      }
      .form-img {
        height: 50px;
      }
      .form-image__wrapper {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
      }

      .welcome-text__wrapper {
        margin-top: 30px;
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: column;
      }

      .form__wrapper {
        margin-top: 20px;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
      }

      .link__text {
        text-decoration: none;
        font-size: 16px;
        line-height: normal;
        text-align: center;
        color: #767676;
        padding: 3px;
        border-bottom: 2px solid #767676;
      }
      `
    }</style>
  </>
)

export default RegisterForm;
