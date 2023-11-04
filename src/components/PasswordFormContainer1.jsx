import { memo, useMemo } from "react";
import "./PasswordFormContainer1.css";

const PasswordFormContainer1 = memo(
  ({ inputLabel, inputPlaceholder, propTop, propBottom }) => {
    const passwordStyle = useMemo(() => {
      return {
        top: propTop,
        bottom: propBottom,
      };
    }, [propTop, propBottom]);

    return (
      <div className="password" style={passwordStyle}>
        <div className="email3">
          <div className="inputfieldtext9">
            <div className="your-password">{inputLabel}</div>
            <img
              className="password-text-icon9"
              alt=""
              src="/password-text.svg"
            />
            <div className="minwidth9">
              <div className="content9" />
            </div>
          </div>
        </div>
        <div className="password1">{inputPlaceholder}</div>
      </div>
    );
  }
);

export default PasswordFormContainer1;
