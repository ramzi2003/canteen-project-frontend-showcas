import { memo } from "react";
import PasswordFormContainer1 from "./PasswordFormContainer1";
import "./FormContainer.css";

const FormContainer = memo(() => {
  return (
    <div className="inputs">
      <div className="background8">
        <img className="background-child10" alt="" src="/rectangle-51.svg" />
        <div className="dont-have-an-container">
          <span>
            <span className="dont-have-an">Don't have an account?</span>
            <b className="b">{` `}</b>
          </span>
          <b className="b">
            <span>Sign up</span>
          </b>
        </div>
      </div>
      <div className="buttonbase">
        <div className="width-structure">
          <div className="height-structure">
            <div className="button-body">
              <div className="icon24">
                <div className="div"></div>
              </div>
              <b className="text12">SIGN UP</b>
              <div className="icon24">
                <div className="div"></div>
              </div>
            </div>
          </div>
          <div className="minwidth10">
            <div className="content10" />
          </div>
        </div>
      </div>
      <div className="remember-me">
        <div className="remember-me1">{`Remember me `}</div>
        <div className="switchbase">
          <div className="switchbase-child" />
        </div>
      </div>
      <PasswordFormContainer1
        inputLabel="Your password"
        inputPlaceholder="Password"
      />
      <PasswordFormContainer1
        inputLabel="Your email address"
        inputPlaceholder="Email"
        propTop="46.29%"
        propBottom="43.22%"
      />
    </div>
  );
});

export default FormContainer;
