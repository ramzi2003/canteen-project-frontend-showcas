import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-pages">
        Pages / {} <br />
        {/* displaying the current page */}
      </div>

      <div className="toolbox">
        <div className="toolbox-search-bar">
          <div className="toolbox-search-bar-icon">
            <ion-icon name="search"></ion-icon>
          </div>
          <input
            placeholder="Type here ..."
            style={{
              fontSize: "1.77vh",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "white",
              marginLeft: "1%",
            }}
          ></input>
        </div>
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
