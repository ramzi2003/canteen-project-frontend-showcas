import React, { useState, useEffect } from "react";
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

  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchDiff = 0;
    let abc = 0;
    const sidebar = document.querySelector(".sidebar");

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      touchEndX = event.touches[0].clientX;
      touchDiff = touchStartX - touchEndX;
    };

    const handleTouchEnd = () => {
      const maxTranslateX = window.innerHeight * 0.07; // 7vh as the maximum translation

      if (touchDiff >= maxTranslateX / 2) {
        setIsSidebarClosed(true);
      } else {
        setIsSidebarClosed(false);
        sidebar.style.transform = "translateX(0)";
      }
    };

    if (window.innerWidth <= 768) {
      sidebar.addEventListener("touchstart", handleTouchStart, false);
      sidebar.addEventListener("touchmove", handleTouchMove, false);
      sidebar.addEventListener("touchend", handleTouchEnd, false);
    }

    return () => {
      if (window.innerWidth <= 768) {
        sidebar.removeEventListener("touchstart", handleTouchStart, false);
        sidebar.removeEventListener("touchmove", handleTouchMove, false);
        sidebar.removeEventListener("touchend", handleTouchEnd, false);
      }
    };
  }, [isSidebarClosed]);

  return (
    <div className={isSidebarClosed ? "sidebar close" : "sidebar"}>
      <div style={{ width: "100%", textAlign: "center" }} className={isSidebarClosed ? "small-device close" : ""}>
        <img src={logo} alt="system logo" className="sidebar-logo" />
      </div>

      <div className={isSidebarClosed ? "small-device close" : "border"}></div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Dashboard</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Payment</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Settings</p>
      </div>  
      <div className="sidebar-category-name">
        <p className={isSidebarClosed ? "small-device close" : ""} >ACCOUNT PAGES</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Profile</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Contact</p>
      </div>
      <div className="sidebar-category-name">
        <p className={isSidebarClosed ? "small-device close" : ""}>ADMIN PAGES</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Clients</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Canteen</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Accounting</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Reception</p>
      </div>
      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Admin</p>
      </div>

      <div
        className={isSidebarClosed ? "sidebar-btn close" : "sidebar-btn"}
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
        <p className={isSidebarClosed ? "small-device close" : ""}>Cash</p>
      </div>
    </div>
  );
}

export default Sidebar;
