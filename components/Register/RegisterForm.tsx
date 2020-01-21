
import { registerFormStyle } from "./style";

const RegisterForm = () => (
  <>
    <div className="form__container">
      <div className="top-form__wrapper">
        <div className="form-bulb__wrapper">
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
            <span className="welcome__text">Welcome!</span>
            <span className="welcome-msg__text">Create your account to get started</span>
          </div>

          <div className="form__wrapper">
            <span className="form__text">Name</span>
            <input className="form__input" type="text" />
            <span className="form__text">Email</span>
            <input className="form__input" type="email" />
            <span className="form__text">Password</span>
            <input className="form__input" type="password" />
            <span className="form__text">Type Password Again</span>
            <input className="form__input" type="password" />
            <button className="form-btn">Signup</button>
            <span className="redirect-form__text">Already have an account? <a className="link__text" href="#/login">Login</a></span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{
      `.form__container {
        display: flex;
        background-color: white;
        justify-content: center;
      }
      .top-form__wrapper {
        display: flex;
        width: 375px;
        height: 812px;
        background: #F8F8F8;
      }
      .form-bulb__wrapper {
        width: 100%;
        margin-top: 93px;
        margin-left: 0px;
        z-index: 1;
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

      .welcome__text {
        font-size: 32px;
        line-height: normal;
        text-align: center;
        color: #767676;
        font-weight: 600;
      }

      .welcome-msg__text {
        width: 80%;
        font-size: 14px;
        line-height: normal;
        text-align: center;
        color: #767676;
      }

      .form__wrapper {
        margin-top: 20px;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
      }

      .form__text {
        margin-left: 30px;
        margin-top: 10px;
        font-size: 12px;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: rgba(68, 89, 132, 0.3);
      }

      .form__input {
        display: flex;
        z-index: 3;
        align-self: center;
        margin-top: 10px;
        margin-bottom: 20px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
        width: 315px;
        height: 48px;
        text-indent: 25px;
        font-size: 14px;
        line-height: normal;
        color: rgba(56, 79, 125, 0.65) !important;
        font-weight: 600;
        text-indent: 25px;
        letter-spacing: 1.5px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
      }
      .form-btn {
        display: flex;
        align-self: center;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 20px;
        background: #c23d38;
        border-radius: 8px;
        border: none;
        width: 315px;
        height: 48px;
        font-size: 14px;
        line-height: normal;
        text-align: center;
        letter-spacing: 2px;
        align-items: center;
        text-transform: uppercase;
        font-weight: 600;
        color: #FFFFFF;
      }

      .redirect-form__text {
        display: -webkit-flex;
        display: flex;
        -webkit-align-self: center;
        align-self: center;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 315px;
        font-size: 16px;
        line-height: normal;
        text-align: center;
        color: #767676;
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
