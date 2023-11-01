import AddNewClientFormContainer from "../components/AddNewClientFormContainer";
import BreadcrumbItemPrevious from "../components/BreadcrumbItemPrevious";
import "./AddClientClientsPage.css";

const AddClientClientsPage = () => {
  return (
    <div className="add-client-clients-page">
      <AddNewClientFormContainer />
      <div className="navbar2">
        <div className="breadcrumb5">
          <div className="menu4">
            <div className="inputwithaddons2">
              <div className="auto-added-frame2">
                <div className="addon2">
                  <img className="icon8" alt="" src="/icon3.svg" />
                  <div className="addons2">Addons</div>
                </div>
              </div>
              <div className="inputfieldtext2">
                <div className="type-here2">Type here...</div>
                <img
                  className="password-text-icon2"
                  alt=""
                  src="/password-text.svg"
                />
                <div className="minwidth2">
                  <div className="content2" />
                </div>
              </div>
            </div>
            <div className="listitemdefault2">
              <img
                className="ioniconppersondefault5"
                alt=""
                src="/ioniconppersondefault.svg"
              />
              <div className="type-here2">Log out</div>
            </div>
            <img
              className="ioniconssettingssharp2"
              alt=""
              src="/ioniconssettingssharp.svg"
            />
            <img
              className="ioniconnnotificationsdefaul2"
              alt=""
              src="/ioniconnnotificationsdefault.svg"
            />
          </div>
        </div>
        <div className="pages-navigation2">
          <div className="breadcrumbitemprevious3">
            <div className="breadcrumb6">
              <span>
                <span>{`Pages `}</span>
              </span>
              <span className="clients-page4">
                <span>{` `}</span>
                <span className="clients-page5">/ Clients page</span>
              </span>
            </div>
          </div>
          <BreadcrumbItemPrevious
            breadcrumb="Add a new client"
            breadcrumbItemPreviousWidth="7.06em"
            breadcrumbItemPreviousPosition="absolute"
            breadcrumbItemPreviousTop="1.38em"
            breadcrumbItemPreviousLeft="0em"
            breadcrumbFontSize="1.5em"
            breadcrumbColor="#fff"
            breadcrumbLineHeight="150%"
            breadcrumbFontFamily="Helvetica"
          />
        </div>
      </div>
      <div className="user2">
        <div className="background3">
          <div className="background-child2" />
          <img
            className="richard-horvath-nwaetf6qo0-un-icon2"
            alt=""
            src="/richardhorvath-nwaetf6qo0unsplash-1@2x.png"
          />
          <div className="background-child3" />
        </div>
        <div className="avatar2">
          <div className="name-and-email2">
            <div className="email2">
              <div className="ivanivanovgmailcom2">ivanivanov@gmail.com</div>
            </div>
            <div className="full-name2">
              <b className="ivan-ivanov2">Ivan Ivanov</b>
            </div>
          </div>
          <img className="image-icon2" alt="" src="/image4@2x.png" />
          <img className="icon9" alt="" src="/icon.svg" />
        </div>
        <div className="buttons2">
          <div className="profile-button2">
            <div className="overview4">
              <img className="icon10" alt="" src="/icon1.svg" />
              <b className="text5"> PROFILE</b>
            </div>
          </div>
          <div className="settings-button2">
            <div className="overview4">
              <img className="icon10" alt="" src="/icon2.svg" />
              <b className="text5"> SETTINGS</b>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar2">
        <div className="menu5">
          <div className="contact-menu1">
            <img className="contact-icon1" alt="" src="/contact-icon.svg" />
            <div className="contact3">Contact</div>
          </div>
          <div className="profile-menu1">
            <img className="contact-icon1" alt="" src="/profile-icon.svg" />
            <div className="profile3">Profile</div>
          </div>
          <div className="account-pages2">ACCOUNT PAGES</div>
          <div className="settings-menu1">
            <div className="settings-icon1">
              <div className="settings-icon-item" />
              <img
                className="ioniconbbuilddefault2"
                alt=""
                src="/ioniconbbuilddefault.svg"
              />
            </div>
            <div className="settings3">Settings</div>
          </div>
          <div className="payment-menu1">
            <img className="contact-icon1" alt="" src="/payment-icon.svg" />
            <div className="payment3">Payment</div>
          </div>
          <div className="dashboard-menu1">
            <img className="dashboard-icon1" alt="" src="/dashboard-icon.svg" />
            <div className="dashboard3">Dashboard</div>
          </div>
          <div className="accounting-menu1">
            <img className="contact-icon1" alt="" src="/accounting-icon.svg" />
            <div className="accounting3">{`Accounting `}</div>
          </div>
          <div className="canteen-menu1">
            <img className="contact-icon1" alt="" src="/contact-icon.svg" />
            <div className="canteen3">Canteen</div>
          </div>
          <div className="clients-menu1">
            <div className="clients-menu-item" />
            <img className="contact-icon1" alt="" src="/clients-icon.svg" />
            <div className="clients3">Clients</div>
          </div>
          <div className="cash-menu1">
            <img className="contact-icon1" alt="" src="/accounting-icon.svg" />
            <div className="cash3">Cash</div>
          </div>
          <div className="admin-menu1">
            <img className="contact-icon1" alt="" src="/contact-icon.svg" />
            <div className="admin3">Admin</div>
          </div>
          <div className="reception-menu1">
            <img className="contact-icon1" alt="" src="/reception-icon.svg" />
            <div className="reception3">Reception</div>
          </div>
          <div className="admin-pages2">ADMIN PAGES</div>
        </div>
        <div className="logo2">
          <div className="uca-canteen2">UCA canteen</div>
          <img
            className="removebg-preview-1-icon2"
            alt=""
            src="/1removebgpreview-1@2x.png"
          />
        </div>
        <img className="vector-icon" alt="" src="/vector-6.svg" />
      </div>
    </div>
  );
};

export default AddClientClientsPage;
