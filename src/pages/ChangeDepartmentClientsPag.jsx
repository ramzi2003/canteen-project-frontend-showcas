import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentSelectionContainer from "../components/DepartmentSelectionContainer";
import BreadcrumbItemPrevious from "../components/BreadcrumbItemPrevious";
import "./ChangeDepartmentClientsPag.css";
import { Link } from "react-router-dom";

const ChangeDepartmentClientsPag = () => {
  const navigate = useNavigate();

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/clients-page");
  }, [navigate]);

  const onLogOutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onPaymentContainerClick = useCallback(() => {
    // Please sync "Payment" to the project
  }, []);

  const onAdminContainerClick = useCallback(() => {
    navigate("/admin-page");
  }, [navigate]);

  return (
    <div className="change-department-clients-pag">
      <div className="back-button" onClick={onBackButtonContainerClick}>
        <b className="text2">BACK</b>
      </div>
      <DepartmentSelectionContainer />
      <div className="user1">
        <div className="background2">
          <div className="rectangle-div" />
          <img
            className="richard-horvath-nwaetf6qo0-un-icon1"
            alt=""
            src="/richardhorvath-nwaetf6qo0unsplash-1@2x.png"
          />
          <div className="background-child1" />
        </div>
        
        <div className="avatar1">
          <div className="name-and-email1">
            <div className="email1">
              <div className="ivanivanovgmailcom1">ivanivanov@gmail.com</div>
            </div>
            <div className="full-name1">
              <b className="ivan-ivanov1">Ivan Ivanov</b>
            </div>
          </div>
          <img className="image-icon1" alt="" src="/image4@2x.png" />
          <img className="icon4" alt="" src="/icon.svg" />
        </div>
        <div className="buttons1">
          <div className="profile-button1">
            <div className="overview2">
              <img className="icon5" alt="" src="/icon4.svg" />
              
              <Link to="" className="text2">
                PROFILE
              </Link>
            </div>
          </div>
          <div className="settings-button1">
            <div className="overview2">
              <img className="icon5" alt="" src="/icon5.svg" />
              
              <Link to="" className="text2">
                SETTINGS
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="navbar1">
        <div className="breadcrumb3">
          <div className="menu2">
            <div className="inputwithaddons1">
              <div className="auto-added-frame1">
                <div className="addon1">
                  <img className="icon7" alt="" src="/icon3.svg" />
                  <div className="addons1">Addons</div>
                </div>
              </div>
              <div className="inputfieldtext1">
                <div className="type-here1">Type here...</div>
                <img
                  className="password-text-icon1"
                  alt=""
                  src="/password-text.svg"
                />
                <div className="minwidth1">
                  <div className="content1" />
                </div>
              </div>
            </div>
            <div className="listitemdefault1">
              <img
                className="ioniconppersondefault1"
                alt=""
                src="/ioniconppersondefault.svg"
              />
              {/* <div className="type-here1">Log out</div> */}
              <Link to="/" className="type-here1">
                Log out
              </Link>
            </div>
            <img
              className="ioniconssettingssharp1"
              alt=""
              src="/ioniconssettingssharp1.svg"
            />
            <img
              className="ioniconnnotificationsdefaul1"
              alt=""
              src="/ioniconnnotificationsdefault1.svg"
            />
          </div>
        </div>
        <div className="pages-navigation1">
          <div className="breadcrumbitemprevious2">
            <div className="breadcrumb4">
              <span>
                <span>{`Pages `}</span>
              </span>
              <span className="clients-page2">
                <span>{` `}</span>
                <span className="clients-page3">/ Clients page</span>
              </span>
            </div>
          </div>
          <BreadcrumbItemPrevious
            breadcrumb="Choose department for a new client"
            breadcrumbItemPreviousWidth="17.06em"
            breadcrumbItemPreviousPosition="absolute"
            breadcrumbItemPreviousTop="1.38em"
            breadcrumbItemPreviousLeft="0em"
            breadcrumbFontSize="0.9em"
            breadcrumbColor="#fff"
            breadcrumbLineHeight="150%"
            breadcrumbFontFamily="Helvetica"
          />
        </div>
      </div>
      <div className="sidebar1">
        <div className="sidebar-item" />
        <div className="menu3">
          <div className="log-out2" onClick={onLogOutContainerClick}>
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconrrocketsharp.svg"
            />
            <div className="log-out3">Log out</div>
          </div>
          <div className="contact1">
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconddocumentdefault.svg"
            />
            <div className="contact2">Contact</div>
          </div>
          <div className="profile1" onClick={onProfileContainerClick}>
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconppersondefault1.svg"
            />
            <div className="profile2">Profile</div>
          </div>
          <div className="account-pages1">ACCOUNT PAGES</div>
          <div className="settings1">
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconbbuilddefault.svg"
            />
            <div className="settings2">Settings</div>
          </div>
          <div className="payment1" onClick={onPaymentContainerClick}>
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconccarddefault.svg"
            />
            <div className="payment2">Payment</div>
          </div>
          <div className="dashboard1">
            <div className="dashboard-child" />
            <img className="dashboard-item" alt="" src="/rectangle-3.svg" />
            <img
              className="ioniconhhomedefault"
              alt=""
              src="/ioniconhhomedefault.svg"
            />
            <div className="dashboard2">Dashboard</div>
          </div>
          <div className="accounting1">
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconrrocketsharp.svg"
            />
            <div className="accounting2">{`Accounting `}</div>
          </div>
          <div className="canteen1">
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconddocumentdefault.svg"
            />
            <div className="canteen2">Canteen</div>
          </div>
          <div className="clients1">
            <div className="clients-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconppersondefault2.svg"
            />
            <div className="clients2">Clients</div>
          </div>
          <div className="cash1">
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconrrocketsharp.svg"
            />
            <div className="cash2">Cash</div>
          </div>
          <div className="admin1" onClick={onAdminContainerClick}>
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconddocumentdefault.svg"
            />
            <div className="admin2">Admin</div>
          </div>
          <div className="reception1">
            <div className="log-out-child" />
            <img
              className="ioniconrrocketsharp"
              alt=""
              src="/ioniconppersondefault3.svg"
            />
            <div className="reception2">Reception</div>
          </div>
          <div className="admin-pages1">ADMIN PAGES</div>
        </div>
        <div className="logo1">
          <div className="uca-canteen1">UCA canteen</div>
          <img
            className="removebg-preview-1-icon1"
            alt=""
            src="/1removebgpreview-1@2x.png"
          />
        </div>
        <img className="sidebar-inner" alt="" src="/vector-6.svg" />
      </div>
    </div>
  );
};

export default ChangeDepartmentClientsPag;
