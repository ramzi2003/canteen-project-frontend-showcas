import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-pages">
        Pages / {} <br />
        {/* displaying the current page */}
      </div>

      <div className="toolbox">
        <div
          className="toolbox-login"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ion-icon name="person"></ion-icon> <span>Log out</span>
        </div>
        <div
          className="toolbox-setting"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ion-icon name="settings"></ion-icon>
        </div>
        <div
          className="toolbox-notification"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ion-icon name="notifications"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Header;
