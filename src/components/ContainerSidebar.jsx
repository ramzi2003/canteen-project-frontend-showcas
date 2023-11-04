import { memo } from "react";
import "./ContainerSidebar.css";

const ContainerSidebar = memo(() => {
  return (
    <div className="sidebar4">
      <div className="menu14">
        <div className="contact-menu2">
          <img className="contact-icon2" alt="" src="/contact-icon.svg" />
          <div className="contact6">Contact</div>
        </div>
        <div className="profile-menu2">
          <img className="contact-icon2" alt="" src="/profile-icon.svg" />
          <div className="profile6">Profile</div>
        </div>
        <div className="account-pages4">ACCOUNT PAGES</div>
        <div className="settings-menu2">
          <div className="settings-icon2">
            <div className="settings-icon-inner" />
            <img
              className="ioniconbbuilddefault5"
              alt=""
              src="/ioniconbbuilddefault3.svg"
            />
          </div>
          <div className="settings6">Settings</div>
        </div>
        <div className="payment-menu2">
          <img className="contact-icon2" alt="" src="/payment-icon.svg" />
          <div className="payment6">Payment</div>
        </div>
        <div className="dashboard-menu2">
          <img className="dashboard-icon2" alt="" src="/dashboard-icon.svg" />
          <div className="dashboard7">Dashboard</div>
        </div>
        <div className="accounting-menu2">
          <img className="contact-icon2" alt="" src="/accounting-icon.svg" />
          <div className="accounting6">{`Accounting `}</div>
        </div>
        <div className="canteen-menu2">
          <img className="contact-icon2" alt="" src="/contact-icon.svg" />
          <div className="canteen6">Canteen</div>
        </div>
        <div className="clients-menu2">
          <div className="clients-menu-inner" />
          <img className="clients-icon2" alt="" src="/clients-icon.svg" />
          <div className="clients6">Clients</div>
        </div>
        <div className="cash-menu2">
          <img className="contact-icon2" alt="" src="/accounting-icon.svg" />
          <div className="cash6">Cash</div>
        </div>
        <div className="admin-menu2">
          <img className="contact-icon2" alt="" src="/contact-icon.svg" />
          <div className="admin6">Admin</div>
        </div>
        <div className="reception-menu2">
          <img className="contact-icon2" alt="" src="/reception-icon.svg" />
          <div className="reception7">Reception</div>
        </div>
        <div className="admin-pages4">ADMIN PAGES</div>
      </div>
      <div className="logo4">
        <img
          className="removebg-preview-1-icon4"
          alt=""
          src="/1removebgpreview-1@2x.png"
        />
        <div className="uca-canteen4">UCA canteen</div>
      </div>
      <img className="sidebar-child3" alt="" src="/vector-6.svg" />
    </div>
  );
});

export default ContainerSidebar;
