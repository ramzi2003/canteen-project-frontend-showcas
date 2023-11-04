import GuestsContainer from "../components/GuestsContainer";
import ContainerSidebar1 from "../components/ContainerSidebar1";
import "./AdminPageReception.css";

const AdminPageReception = () => {
  return (
    <div className="admin-page-reception">
      <GuestsContainer eventDetails="Reception" />
      <div className="user4">
        <div className="background7">
          <div className="background-child8" />
          <img
            className="richard-horvath-nwaetf6qo0-un-icon4"
            alt=""
            src="/richardhorvath-nwaetf6qo0unsplash-1@2x.png"
          />
          <div className="background-child9" />
        </div>
        <div className="avatar4">
          <div className="name-and-email4">
            <div className="ivanivanovgmailcom4">ivanivanov@gmail.com</div>
            <b className="ivan-ivanov5">Ivan Ivanov</b>
          </div>
          <img className="image-icon4" alt="" src="/image4@2x.png" />
          <img className="icon16" alt="" src="/icon.svg" />
        </div>
        <div className="buttons4">
          <div className="overview8">
            <img className="icon17" alt="" src="/icon16.svg" />
            <b className="text10"> PROFILE</b>
          </div>
          <div className="overview9">
            <img className="icon17" alt="" src="/icon17.svg" />
            <b className="text10"> SETTINGS</b>
          </div>
        </div>
      </div>
      <div className="navbar4">
        <div className="menu8">
          <div className="inputwithaddons4">
            <div className="auto-added-frame4">
              <div className="addon4">
                <img className="icon19" alt="" src="/icon3.svg" />
                <div className="addons4">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext4">
              <div className="type-here4">Type here...</div>
              <img
                className="password-text-icon4"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth4">
                <div className="content4" />
              </div>
            </div>
          </div>
          <div className="listitemdefault4">
            <img
              className="ioniconppersondefault10"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here4">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp4"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul4"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="path1">
          <div className="reception6">Reception</div>
          <div className="breadcrumb8">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="admin-page2">
              <span>{` `}</span>
              <span className="admin-page3">/ Admin page</span>
            </span>
          </div>
        </div>
      </div>
      <ContainerSidebar1 />
    </div>
  );
};

export default AdminPageReception;
