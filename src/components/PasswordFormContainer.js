import { memo, useMemo } from "react";
import "./PasswordFormContainer.css";

const PasswordFormContainer = memo(
  ({ inputLabel, inputPlaceholder, propTop, propBottom }) => {
    const password1Style = useMemo(() => {
      return {
        top: propTop,
        bottom: propBottom,
      };
    }, [propTop, propBottom]);

    return (
      <div className="password2" style={password1Style}>
        <div className="email6">
          <div className="inputfieldtext12">
            <div className="your-password1">{inputLabel}</div>
            <img
              className="password-text-icon12"
              alt=""
              src="/password-text.svg"
            />
            <div className="minwidth13">
              <div className="content18" />
            </div>
          </div>
        </div>
        <div className="password3">{inputPlaceholder}</div>
      </div>
    );
  }
);

export default PasswordFormContainer;
