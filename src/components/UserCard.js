import { memo } from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";

const UserCard = memo(() => {
  return (
    <div className="user5">
      <div className="background18">
        <div className="background-child19" />
        <img
          className="richard-horvath-nwaetf6qo0-un-icon5"
          alt=""
          src="/richardhorvath-nwaetf6qo0unsplash-11@2x.png"
        />
        <div className="background-child20" />
      </div>
      <div className="avatar10">
        <div className="name-and-email5">
          <b className="ivan-ivanov6">Ivan Ivanov</b>
          <div className="ivanivanovgmailcom5">ivanivanov@gmail.com</div>
        </div>
        <img className="image-icon15" alt="" src="/image9@2x.png" />
        <img className="icon41" alt="" src="/icon.svg" />
      </div>
      <div className="buttons5">
        <div className="overview13">
          <img className="icon42" alt="" src="/icon16.svg" />
          {/* <b className="text26"> PROFILE</b> */}
          <Link to="" className="text26">
            PROFILE
          </Link>
        </div>
        <div className="overview13">
          <img className="icon42" alt="" src="/icon17.svg" />
          {/* <b className="text26"> SETTINGS</b> */}
          <Link to="" className="text26">
            SETTINGS
          </Link>
        </div>
      </div>
    </div>
  );
});

export default UserCard;
