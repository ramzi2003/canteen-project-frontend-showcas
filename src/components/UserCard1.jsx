import { memo, useMemo } from "react";
import "./UserCard1.css";

const UserCard1 = memo(({ propTop }) => {
  const userStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="user6" style={userStyle}>
      <div className="background20">
        <div className="background-child22" />
        <img
          className="richard-horvath-nwaetf6qo0-un-icon6"
          alt=""
          src="/richardhorvath-nwaetf6qo0unsplash-1@2x.png"
        />
        <div className="background-child23" />
      </div>
      <div className="avatar11">
        <div className="name-and-email6">
          <div className="ivanivanovgmailcom6">ivanivanov@gmail.com</div>
          <b className="ivan-ivanov7">Ivan Ivanov</b>
        </div>
        <img className="image-icon16" alt="" src="/image4@2x.png" />
        <img className="icon47" alt="" src="/icon.svg" />
      </div>
      <div className="buttons6">
        <div className="overview15">
          <img className="icon48" alt="" src="/icon16.svg" />
          <b className="text29"> PROFILE</b>
        </div>
        <div className="overview16">
          <img className="icon48" alt="" src="/icon17.svg" />
          <b className="text29"> SETTINGS</b>
        </div>
      </div>
    </div>
  );
});

export default UserCard1;
