import GuestsContainer from "../components/GuestsContainer";
import ContainerSidebar1 from "../components/ContainerSidebar1";
import "./AdminPageGuests.css";

const AdminPageGuests = () => {
  return (
    <div className="admin-page-guests">
      <GuestsContainer eventDetails="Guests" />
      <div className="user3">
        <div className="background6">
          <div className="background-child6" />
          <img
            className="richard-horvath-nwaetf6qo0-un-icon3"
            alt=""
            src="/richardhorvath-nwaetf6qo0unsplash-1@2x.png"
          />
          <div className="background-child7" />
        </div>
        <div className="avatar3">
          <div className="name-and-email3">
            <div className="ivanivanovgmailcom3">ivanivanov@gmail.com</div>
            <b className="ivan-ivanov4">Ivan Ivanov</b>
          </div>
          <img className="image-icon3" alt="" src="/image4@2x.png" />
          <img className="icon12" alt="" src="/icon.svg" />
        </div>
        <div className="buttons3">
          <div className="overview6">
            <img className="icon13" alt="" src="/icon16.svg" />
            <b className="text8"> PROFILE</b>
          </div>
          <div className="overview7">
            <img className="icon13" alt="" src="/icon17.svg" />
            <b className="text8"> SETTINGS</b>
          </div>
        </div>
      </div>
      <div className="navbar3">
        <div className="menu7">
          <div className="inputwithaddons3">
            <div className="auto-added-frame3">
              <div className="addon3">
                <img className="icon15" alt="" src="/icon3.svg" />
                <div className="addons3">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext3">
              <div className="type-here3">Type here...</div>
              <img
                className="password-text-icon3"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth3">
                <div className="content3" />
              </div>
            </div>
          </div>
          <div className="listitemdefault3">
            <img
              className="ioniconppersondefault9"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here3">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp3"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul3"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="path">
          <div className="guests">Guests</div>
          <div className="breadcrumb7">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="admin-page">
              <span>{` `}</span>
              <span className="admin-page1">/ Admin page</span>
            </span>
          </div>
        </div>
      </div>
      <ContainerSidebar1 />
    </div>
  );
};

export default AdminPageGuests;
