import React from "react";
import OrderOverviewCard from "../../components/DashboardComponents/Orders overview/OrderOverviewCard";
import MenuCard from "../../components/DashboardComponents/Menu/MenuCard";
import CommunicationCenterForm from "../../components/DashboardComponents/CommunicationCenter/CommunicationCenterForm";
import FilteredForm from "../../components/DashboardComponents/Missed meals/FilteredForm";
import WasteReductionContainer from "../../components/DashboardComponents/Waste Reduction/WasteReductionContainer";
import SatisfactionRateForm from "../../components/DashboardComponents/Satisfaction Rate/SatisfactionRateForm";
import AnalyticsForm from "../../components/DashboardComponents/Analytics/AnalyticsForm";
import DashboardContainer from "../../components/DashboardComponents/Navbar/DashboardContainer";
import ContainerSidebar from "../../components/DashboardComponents/Sidebar/ContainerSidebar";
import "./DashboardScreen.css";
l;gkdlfgj

const DashboardScreen = () => {
  return (
    <div className="dashboard-screen">
      <div className="main-dashboard">
        <div className="main-dashboard">
          <div className="background-child" />
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
            <img className="background-icon" alt="" src="images/background1@2x.png" />
            <div className="text">
              <div className="glad-to-see-container">
                <p className="glad-to-see">Glad to see you again!</p>
              </div>
              <b className="ivan-ivanov">Ivan Ivanov</b>
              <div className="welcome-back">Welcome back,</div>
            </div>
          </div>
        </div>
        <AnalyticsForm />
        <DashboardContainer />
      </div>
      <ContainerSidebar />
    </div>
  );
};

export default DashboardScreen;
