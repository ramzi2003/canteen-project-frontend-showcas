import AdminUsersTableContainer from "../components/AdminUsersTableContainer";
import ContainerSidebar1 from "../components/ContainerSidebar1";
import UserCard1 from "../components/UserCard1";
import "./AdminPageAdmins.css";

const AdminPageAdmins = () => {
  return (
    <div className="admin-page-admins">
      <AdminUsersTableContainer />
      <ContainerSidebar1 />
      <div className="navbar7">
        <div className="menu11">
          <div className="inputwithaddons7">
            <div className="auto-added-frame7">
              <div className="addon7">
                <img className="icon22" alt="" src="/icon3.svg" />
                <div className="addons7">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext7">
              <div className="type-here7">Type here...</div>
              <img
                className="password-text-icon7"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth7">
                <div className="content7" />
              </div>
            </div>
          </div>
          <div className="listitemdefault7">
            <img
              className="ioniconppersondefault13"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here7">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp7"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul7"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="path4">
          <div className="admin-users">Admin users</div>
          <div className="breadcrumb11">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="admin-page8">
              <span>{` `}</span>
              <span className="admin-page9">/ Admin page</span>
            </span>
          </div>
        </div>
      </div>
      <UserCard1 propTop="6.56em" />
    </div>
  );
};

export default AdminPageAdmins;
