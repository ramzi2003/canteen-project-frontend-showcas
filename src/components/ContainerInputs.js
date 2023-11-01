import { memo } from "react";
import PasswordFormContainer from "./PasswordFormContainer";
import "./ContainerInputs.css";

const ContainerInputs = memo(() => {
  return (
    <div className="inputs1">
      <div className="background19">
        <img className="background-child21" alt="" src="/rectangle-511.svg" />
        <div className="already-have-an-container">
          <span>
            <span className="already-have-an">Already have an account?</span>
            <b className="sign-in">{` `}</b>
          </span>
          <b className="sign-in">
            <span>Sign in</span>
          </b>
        </div>
      </div>
      <div className="buttonbase1">
        <div className="width-structure1">
          <div className="height-structure1">
            <div className="button-body1">
              <div className="icon45">
                <div className="div25"></div>
              </div>
              <b className="text28">SIGN UP</b>
              <div className="icon45">
                <div className="div25"></div>
              </div>
            </div>
          </div>
          <div className="minwidth14">
            <div className="content19" />
          </div>
        </div>
      </div>
      <div className="remember-me2">
        <div className="remember-me3">{`Remember me `}</div>
        <div className="switchbase1">
          <div className="switchbase-item" />
        </div>
      </div>
      <PasswordFormContainer
        inputLabel="Your password"
        inputPlaceholder="Password"
      />
      <PasswordFormContainer
        inputLabel="Your email address"
        inputPlaceholder="Email"
        propTop="55.47%"
        propBottom="35.84%"
      />
      <PasswordFormContainer
        inputLabel="Your full name"
        inputPlaceholder="Name"
        propTop="44.01%"
        propBottom="47.31%"
      />
      <div className="register-with">
        <div className="google">
          <div className="google-child" />
          <img
            className="ioniconllogogoogle"
            alt=""
            src="/ioniconllogogoogle.svg"
          />
        </div>
        <img className="apple-icon" alt="" src="/apple.svg" />
        <img className="facebook-icon" alt="" src="/facebook.svg" />
        <div className="title12">
          <b className="or">or</b>
          <b className="register-with1">Register with</b>
        </div>
      </div>
      <div className="title13">
        <div className="use-these-awesome-container">
          <p className="use-these-awesome">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
          <p className="use-these-awesome">&nbsp;</p>
        </div>
        <b className="welcome">Welcome!</b>
      </div>
    </div>
  );
});

export default ContainerInputs;
