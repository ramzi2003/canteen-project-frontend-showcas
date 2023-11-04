import FormContainer from "../components/FormContainer";
import "./SignInScreen.css";

const SignInScreen = () => {
  return (
    <div className="sign-in-screen">
      <div className="new-design">
        <div className="new-design">
          <div className="new-design">
            <div className="background-child" />
          </div>
          <FormContainer />
        </div>
      </div>
      <div className="title">
        <div className="enter-your-email">
          Enter your email and password to sign in
        </div>
        <b className="nice-to-see">Nice to see you!</b>
      </div>
    </div>
  );
};

export default SignInScreen;
