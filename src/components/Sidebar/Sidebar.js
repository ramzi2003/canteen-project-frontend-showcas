import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/images/Logo.png";

function Sidebar() {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isPaymentHovered, setIsPaymentHovered] = useState(false);
  const [isSettingsHovered, setIsSettingsHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  // const [isLogoutHovered, setIsLogoutHovered] = useState(false);
  const [isClientsHovered, setIsClientsHovered] = useState(false);
  const [isCanteenHovered, setIsCanteenHovered] = useState(false);
  const [isAccountingHovered, setIsAccountingHovered] = useState(false);
  const [isReceptionHovered, setIsReceptionHovered] = useState(false);
  const [isAdminHovered, setIsAdminHovered] = useState(false);
  const [isCashHovered, setIsCashHovered] = useState(false);

  return (
    <div className="sidebar">
      <img src={logo} alt="system logo" className="sidebar-logo" />
      <div className="border"></div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsHomeHovered(true)}
        onMouseLeave={() => setIsHomeHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isHomeHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="home"
            style={{ color: isHomeHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Dashboard</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsPaymentHovered(true)}
        onMouseLeave={() => setIsPaymentHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isPaymentHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="card"
            style={{ color: isPaymentHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Payment</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsSettingsHovered(true)}
        onMouseLeave={() => setIsSettingsHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isSettingsHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="build"
            style={{ color: isSettingsHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Settings</p>
      </div>
      <div className="sidebar-category-name">
        <p>ACCOUNT PAGES</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsProfileHovered(true)}
        onMouseLeave={() => setIsProfileHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isProfileHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="person"
            style={{ color: isProfileHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Profile</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsContactHovered(true)}
        onMouseLeave={() => setIsContactHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isContactHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="document"
            style={{ color: isContactHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Contact</p>
      </div>

      {/* Choosing whether to put this or not, as we already have logout on Dashboard (team discussion) */}
      {/* <div
        className="sidebar-btn"
        onMouseEnter={() => setIsLogoutHovered(true)}
        onMouseLeave={() => setIsLogoutHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isLogoutHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="rocket"
            style={{ color: isLogoutHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Log out</p>
      </div> */}


      <div className="sidebar-category-name">
        <p>ADMIN PAGES</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsClientsHovered(true)}
        onMouseLeave={() => setIsClientsHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isClientsHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="person"
            style={{ color: isClientsHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Clients</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsCanteenHovered(true)}
        onMouseLeave={() => setIsCanteenHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isCanteenHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="document"
            style={{ color: isCanteenHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Canteen</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsAccountingHovered(true)}
        onMouseLeave={() => setIsAccountingHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isAccountingHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="rocket"
            style={{ color: isAccountingHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Accounting</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsReceptionHovered(true)}
        onMouseLeave={() => setIsReceptionHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isReceptionHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="person"
            style={{ color: isReceptionHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Reception</p>
      </div>
      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsAdminHovered(true)}
        onMouseLeave={() => setIsAdminHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isAdminHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="document"
            style={{ color: isAdminHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Admin</p>
      </div>

      <div
        className="sidebar-btn"
        onMouseEnter={() => setIsCashHovered(true)}
        onMouseLeave={() => setIsCashHovered(false)}
      >
        <div
          className="sidebar-icon-div"
          style={{ backgroundColor: isCashHovered ? "#05cd99" : "" }}
        >
          <ion-icon
            name="rocket"
            style={{ color: isCashHovered ? "white" : "" }}
          ></ion-icon>
        </div>
        <p>Cash</p>
      </div>
    </div>
  );
}

export default Sidebar;
