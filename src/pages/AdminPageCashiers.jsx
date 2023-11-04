import CashiersUsersTableContainer from "../components/CashiersUsersTableContainer";
import UserCard1 from "../components/UserCard1";
import ContainerSidebar1 from "../components/ContainerSidebar1";
import "./AdminPageCashiers.css";

const AdminPageCashiers = () => {
  return (
    <div className="admin-page-cashiers">
      <CashiersUsersTableContainer />
      <UserCard1 />
      <div className="navbar5">
        <div className="menu9">
          <div className="inputwithaddons5">
            <div className="auto-added-frame5">
              <div className="addon5">
                <img className="icon20" alt="" src="/icon3.svg" />
                <div className="addons5">Addons</div>
              </div>
            </div>
            <div className="inputfieldtext5">
              <div className="type-here5">Type here...</div>
              <img
                className="password-text-icon5"
                alt=""
                src="/password-text.svg"
              />
              <div className="minwidth5">
                <div className="content5" />
              </div>
            </div>
          </div>
          <div className="listitemdefault5">
            <img
              className="ioniconppersondefault11"
              alt=""
              src="/ioniconppersondefault.svg"
            />
            <div className="type-here5">Log out</div>
          </div>
          <img
            className="ioniconssettingssharp5"
            alt=""
            src="/ioniconssettingssharp2.svg"
          />
          <img
            className="ioniconnnotificationsdefaul5"
            alt=""
            src="/ioniconnnotificationsdefault2.svg"
          />
        </div>
        <div className="path2">
          <div className="cashiers">Cashiers</div>
          <div className="breadcrumb9">
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className="admin-page4">
              <span>{` `}</span>
              <span className="admin-page5">/ Admin page</span>
            </span>
          </div>
        </div>
      </div>
      <ContainerSidebar1 />
    </div>
  );
};

export default AdminPageCashiers;
