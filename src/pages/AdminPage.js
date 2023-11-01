import AdminTableContainer from "../components/AdminTableContainer";
import UserCard1 from "../components/UserCard1";
import ContainerSidebar1 from "../components/ContainerSidebar1";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-page10">
      <AdminTableContainer />
      <div className="navbar8">
        <div className="menu12">
          <div className="inputwithaddons8">
            <div className="auto-added-frame8">
              <div className="addon8">
                <img className="icon23" alt="" src="/icon3.svg" />
                <div className="addons8">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext8">
              <div className="type-here8">Type here...</div>
              <img
                className="password-text-icon8"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth8">
                <div className="content8" />
              </div>
            </div>
          </div>
          <div className="listitemdefault8">
            <img
              className="ioniconppersondefault14"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here8">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp8"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul8"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="path5">
          <div className="breadcrumb12">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="admin-page11">
              <span>{` `}</span>
              <span className="admin-page12">/ Admin page</span>
            </span>
          </div>
        </div>
      </div>
      <UserCard1 propTop="6.19em" />
      <ContainerSidebar1 />
    </div>
  );
};

export default AdminPage;
