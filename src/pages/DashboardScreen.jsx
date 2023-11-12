import { useCallback } from "react";
import OrderOverviewCard from "../components/OrderOverviewCard";
import MenuCard from "../components/MenuCard";
import CommunicationCenterForm from "../components/CommunicationCenterForm";
import FilteredForm from "../components/FilteredForm";
import WasteReductionContainer from "../components/WasteReductionContainer";
import SatisfactionRateForm from "../components/SatisfactionRateForm";
import AnalyticsForm from "../components/AnalyticsForm";
import DashboardContainer from "../components/DashboardContainer";
import { useNavigate } from "react-router-dom";
import "./DashboardScreen.css";

const DashboardScreen = () => {
  const navigate = useNavigate();

  const onProfileContainerClick = useCallback(() => {
    
  }, []);

  const onPaymentContainerClick = useCallback(() => {

  }, []);

  const onClientsContainerClick = useCallback(() => {
    navigate("/clients-page");
  }, [navigate]);

  const onAdminContainerClick = useCallback(() => {
    navigate("/admin-page");
  }, [navigate]);

  return (
    <div className="dashboard-screen">
      <div className="main-dashboard1">
        <div className="main-dashboard1">
          <div className="background-child4" />
          <div className="wp9649930-1" />
        </div>
        <div className="content-cards">
          <OrderOverviewCard />
          <MenuCard />
        </div>
        <div className="analytics-cards">
          <CommunicationCenterForm />
          <FilteredForm />
          <WasteReductionContainer />
          <SatisfactionRateForm />
        </div>
        <div className="big-cards">
          <div className="first-card">
            <img className="background-icon" alt="" src="/background1@2x.png" />
            <div className="text7">
              <div className="glad-to-see-container">
                <p className="glad-to-see">Glad to see you again!</p>
              </div>
              <b className="ivan-ivanov3">Ivan Ivanov</b>
              <div className="welcome-back">Welcome back,</div>
            </div>
          </div>
        </div>
        <AnalyticsForm />
        <DashboardContainer />
      </div>
      <div className="sidebar3">
        <div className="sidebar-child1" />
        <div className="menu6">
          <div className="log-out5">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconrrocketsharp1.svg"
            />
            <div className="log-out6">Log out</div>
          </div>
          <div className="contact4">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconddocumentdefault1.svg"
            />
            <div className="log-out6">Contact</div>
          </div>
          <div className="profile4" onClick={onProfileContainerClick}>
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconppersondefault4.svg"
            />
            <div className="log-out6">Profile</div>
          </div>
          <div className="account-pages3">ACCOUNT PAGES</div>
          <div className="settings4">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconbbuilddefault2.svg"
            />
            <div className="log-out6">Settings</div>
          </div>
          <div className="payment4" onClick={onPaymentContainerClick}>
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconccarddefault1.svg"
            />
            <div className="log-out6">Payment</div>
          </div>
          <div className="dashboard4">
            <div className="dashboard-inner" />
            <img className="rectangle-icon" alt="" src="/rectangle-31.svg" />
            <img
              className="ioniconhhomedefault1"
              alt=""
              src="/ioniconhhomedefault1.svg"
            />
            <div className="dashboard5">Dashboard</div>
          </div>
          <div className="accounting4">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconrrocketsharp1.svg"
            />
            <div className="log-out6">{`Accounting `}</div>
          </div>
          <div className="canteen4">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconddocumentdefault1.svg"
            />
            <div className="log-out6">Canteen</div>
          </div>
          <div className="clients4" onClick={onClientsContainerClick}>
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconppersondefault4.svg"
            />
            <div className="log-out6">Clients</div>
          </div>
          <div className="cash4">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconrrocketsharp1.svg"
            />
            <div className="log-out6">Cash</div>
          </div>
          <div className="admin4" onClick={onAdminContainerClick}>
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconddocumentdefault1.svg"
            />
            <div className="log-out6">Admin</div>
          </div>
          <div className="reception4">
            <div className="log-out-item" />
            <img
              className="ioniconrrocketsharp3"
              alt=""
              src="/ioniconppersondefault4.svg"
            />
            <div className="log-out6">Reception</div>
          </div>
          <div className="admin-pages3">ADMIN PAGES</div>
        </div>
        <div className="logo3">
          <div className="uca-canteen3">UCA canteen</div>
          <img
            className="removebg-preview-1-icon3"
            alt=""
            src="/1removebgpreview-11@2x.png"
          />
        </div>
        <img className="sidebar-child2" alt="" src="/vector-61.svg" />
      </div>
    </div>
  );
};

export default DashboardScreen;
