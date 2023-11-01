import { memo } from "react";
import UserCard from "./UserCard";
import FormContainer1 from "./FormContainer1";
import "./UserCard2.css";

const UserCard2 = memo(() => {
  return (
    <div className="frame">
      <div className="navbar9">
        <div className="menu15">
          <div className="inputwithaddons10">
            <div className="auto-added-frame10">
              <div className="addon10">
                <img className="icon44" alt="" src="/icon3.svg" />
                <div className="addons10">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext11">
              <div className="type-here10">Type here...</div>
              <img
                className="password-text-icon11"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth12">
                <div className="content17" />
              </div>
            </div>
          </div>
          <div className="listitemdefault10">
            <img
              className="ioniconppersondefault16"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here10">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp10"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul10"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="breadcrumbitemprevious4">
          <div className="breadcrumb14">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="clients-page7">
              <span>{` `}</span>
              <span className="clients-page8">/ Clients page</span>
            </span>
          </div>
        </div>
      </div>
      <UserCard />
      <FormContainer1 />
    </div>
  );
});

export default UserCard2;
