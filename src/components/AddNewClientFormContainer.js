import { memo } from "react";
import "./AddNewClientFormContainer.css";

const AddNewClientFormContainer = memo(() => {
  return (
    <div className="add-a-new-client-form">
      <div className="background11" />
      <div className="form-buttons">
        <div className="save-button">
          <div className="overview10">
            <b className="save-text"> Save</b>
          </div>
        </div>
        <div className="save-and-add-new-button">
          <div className="overview10">
            <b className="save-text">Save and add new</b>
          </div>
        </div>
        <div className="cancel-button">
          <div className="overview12">
            <b className="save-text">Cancel</b>
          </div>
        </div>
      </div>
      <div className="family-input">
        <div className="family">
          <div className="your-family-status">Your family status</div>
        </div>
        <div className="family-text">Family</div>
      </div>
      <div className="living-place-input">
        <div className="family">
          <div className="your-family-status">Your place of living</div>
        </div>
        <div className="family-text">Living place</div>
      </div>
      <div className="registered-date-input">
        <div className="family">
          <div className="your-family-status">
            Your date of registration to campus
          </div>
        </div>
        <div className="family-text">Registered date</div>
      </div>
      <div className="add-a-new-client-title">
        <div className="total-text">
          <b className="total-900">Total: 900</b>
          <img
            className="ioniconccheckmarkccircle"
            alt=""
            src="/ioniconccheckmarkccircle.svg"
          />
        </div>
        <b className="add-a-new">Add a new Client</b>
      </div>
      <div className="position-input">
        <div className="family">
          <div className="your-family-status">Your position</div>
        </div>
        <div className="family-text">Position</div>
      </div>
      <div className="email-input">
        <div className="family">
          <div className="your-family-status">Your email address</div>
        </div>
        <div className="family-text">Email</div>
      </div>
      <div className="name-input">
        <div className="family">
          <div className="your-family-status">Your full name</div>
        </div>
        <div className="name-text">Name</div>
      </div>
      <div className="passport-input">
        <div className="family">
          <div className="your-family-status">Your passport number</div>
        </div>
        <div className="family-text">Passport</div>
      </div>
      <div className="education-input">
        <div className="family">
          <div className="your-family-status">Your education background</div>
        </div>
        <div className="family-text">Education</div>
      </div>
      <div className="phone-numbers-input">
        <div className="family">
          <div className="your-family-status">Your mobile numbers</div>
        </div>
        <div className="family-text">Phone numbers</div>
      </div>
    </div>
  );
});

export default AddNewClientFormContainer;
