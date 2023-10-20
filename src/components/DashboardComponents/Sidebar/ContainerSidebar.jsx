import { useCallback } from "react";
import "./ContainerSidebar.css";

const ContainerSidebar = () => {
  const onProfileContainerClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onPaymentContainerClick = useCallback(() => {
    // Please sync "Payment" to the project
  }, []);

  const onClientsContainerClick = useCallback(() => {
    // Please sync "Clients Page" to the project
  }, []);

  const onAdminContainerClick = useCallback(() => {
    // Please sync "Admin page" to the project
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-child" />
      <div className="menu1">
        <div className="log-out1">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconrrocketsharp.svg"
          />
          <div className="log-out2">Log out</div>
        </div>
        <div className="contact">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconddocumentdefault.svg"
          />
          <div className="log-out2">Contact</div>
        </div>
        <div className="profile" onClick={onProfileContainerClick}>
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconppersondefault1.svg"
          />
          <div className="log-out2">Profile</div>
        </div>
        <div className="account-pages">ACCOUNT PAGES</div>
        <div className="settings">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconbbuilddefault1.svg"
          />
          <div >
            <a href="" className="log-out2">Setting</a>
          </div>
        </div>
        <div className="payment" onClick={onPaymentContainerClick}>
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconccarddefault.svg"
          />
          <div className="log-out2">Payment</div>
        </div>
        <div className="dashboard1">
          <div className="dashboard-child" />
          <img className="dashboard-item" alt="" src="icons/rectangle-3.svg" />
          <img
            className="ioniconhhomedefault1"
            alt=""
            src="icons/ioniconhhomedefault.svg"
          />
          <div className="dashboard2">Dashboard</div>
        </div>
        <div className="accounting">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconrrocketsharp1.svg"
          />
          <div className="log-out2">{`Accounting `}</div>
        </div>
        <div className="canteen">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconddocumentdefault.svg"
          />
          <div className="log-out2">Canteen</div>
        </div>
        <div className="clients" onClick={onClientsContainerClick}>
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconppersondefault1.svg"
          />
          <div className="log-out2">Clients</div>
        </div>
        <div className="cash">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconrrocketsharp1.svg"
          />
          <div className="log-out2">Cash</div>
        </div>
        <div className="admin" onClick={onAdminContainerClick}>
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconddocumentdefault.svg"
          />
          <div className="log-out2">Admin</div>
        </div>
        <div className="reception">
          <div className="log-out-child" />
          <img
            className="ioniconrrocketsharp1"
            alt=""
            src="icons/ioniconppersondefault1.svg"
          />
          <div className="log-out2">Reception</div>
        </div>
        <div className="admin-pages">ADMIN PAGES</div>
      </div>
      <div className="logo">
        <div className="uca-canteen">UCA canteen</div>
        <img
          className="removebg-preview-1-icon"
          alt=""
          src="images/1removebgpreview-1@2x.png"
        />
      </div>
      <img className="sidebar-item" alt="" src="icons/vector-6.svg" />
    </div>
  );
};

export default ContainerSidebar;
