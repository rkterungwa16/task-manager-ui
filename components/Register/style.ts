export const registerFormStyle = `
  .form__container {
    display: flex;
    position: absolute;
    top: 6.5rem;
    padding: 5.8rem;
    width: 86%;
    height: 100vh;
    background-color: white;
    overflow: hidden;
    justify-content: center;
  }
  .welcome-form__wrapper {
    display: flex;
    width: 375px;
    height: 812px;
    background: #ededed;
  }
  .form-bulb__wrapper {
    width: 100%;
    margin-top: 93px;
    margin-left: 0px;
    z-index: 1;
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
    color: #384F7D;
    font-weight: 600;
  }

  .welcome-msg__text {
    width: 80%;
    font-size: 14px;
    line-height: normal;
    text-align: center;
    color: #384F7D;
  }

  .form__wrapper {
    margin-top: 20px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

  .form__input {
    display: flex;
    z-index: 3;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border-radius: 8px;
    width: 315px;
    height: 48px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-indent: 25px;
    font-size: 14px;
    line-height: normal;
    color: rgba(56, 79, 125, 0.65) !important;
    font-weight: 600;
    text-indent: 25px;
    letter-spacing: 1.5px;
    box-shadow: 0px 10px 15px #DDEBDC;
  }
`;
