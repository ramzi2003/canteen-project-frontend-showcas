import BookerUsersTableContainer from "../components/BookerUsersTableContainer";
import UserCard1 from "../components/UserCard1";
import ContainerSidebar1 from "../components/ContainerSidebar1";
import "./AdminPageBookers.css";

const AdminPageBookers = () => {
  return (
    <div className="admin-page-bookers">
      <BookerUsersTableContainer />
      <UserCard1 propTop="6.56em" />
      <div className="navbar6">
        <div className="menu10">
          <div className="inputwithaddons6">
            <div className="auto-added-frame6">
              <div className="addon6">
                <img className="icon21" alt="" src="/icon3.svg" />
                <div className="addons6">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext6">
              <div className="type-here6">Type here...</div>
              <img
                className="password-text-icon6"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth6">
                <div className="content6" />
              </div>
            </div>
          </div>
          <div className="listitemdefault6">
            <img
              className="ioniconppersondefault12"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here6">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp6"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul6"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="path3">
          <div className="bookers">Bookers</div>
          <div className="breadcrumb10">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="admin-page6">
              <span>{` `}</span>
              <span className="admin-page7">/ Admin page</span>
            </span>
          </div>
        </div>
      </div>
      <ContainerSidebar1 />
    </div>
  );
};

export default AdminPageBookers;
