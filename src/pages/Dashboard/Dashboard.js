import React from "react";

import "./Dashboard.css";
import Balance from "../../components/DashboardRowFirst/Balance/Balance";
import LastWeekExpenses from "../../components/DashboardRowFirst/LastWeekExpenses/LastWeekExpenses";
import LastLogin from "../../components/DashboardRowFirst/LastLogin/LastLogin";
import TotalExpenses from "../../components/DashboardRowFirst/TotalExpenses/TotalExpenses";
import UserCard from "../../components/DashboardRowSecond/UserCard/UserCard";
import SatisfactionRate from "../../components/DashboardRowSecond/SatisfactionRate/SatisfactionRate";
import WasteReduction from "../../components/DashboardRowSecond/WasteReduction/WasteReduction";
import CommunicationCenter from "../../components/DashboardRowThird/CommunicationCenter/CommunicationCenter";
import MissedMeals from "../../components/DashboardRowThird/MissedMeals/MissedMeals";
import TodaysMenu from "../../components/DashboardRowFourth/TodaysMenu/TodaysMenu";
import OrdersOverview from "../../components/DashboardRowFourth/OrdersOverview/OrdersOverview";

function Dashboard() {
  return (
    <div className="dashboard">
      <table className="dashboard-table">
        <tr className="first-row">
          <td className="dashboard-first-row">
            <Balance />
          </td>
          <td className="dashboard-second-row">
            <LastWeekExpenses />
          </td>
          <td className="dashboard-third-row">
            <LastLogin />
          </td>
          <td className="dashboard-third-row">
            <TotalExpenses />
          </td>
        </tr>
      </table>
      <table className="dashboard-table">
        <tr>
          <td
            style={{
              width: "41%",
            }}
          >
            <UserCard />
          </td>
          <td
            style={{
              width: "25%",
            }}
          >
            <SatisfactionRate />
          </td>
          <td>
            <WasteReduction />
          </td>
        </tr>
      </table>
      <table className="dashboard-table">
        <tr>
          <td style={{ width: "61%" }}>
            <CommunicationCenter />
          </td>
          <td>
            <MissedMeals />
          </td>
        </tr>
      </table>
      <table className="dashboard-table">
        <tr>
          <td style={{ width: "68%" }}>
            <TodaysMenu />
          </td>
          <td>
            <OrdersOverview />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Dashboard;
