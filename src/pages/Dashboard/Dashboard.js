import React, { useEffect } from "react";

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
      <table className="dashboard-table" id="firstTable">
        <tr className="first-row">
          <td>
            <Balance />
          </td>
          <td>
            <LastWeekExpenses />
          </td>
          <td>
            <LastLogin />
          </td>
          <td>
            <TotalExpenses />
          </td>
        </tr>
      </table>
      <table className="dashboard-table" id="secondTable">
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
        <tr className="third-row">
          <td className="communication">
            <CommunicationCenter />
          </td>
          <td id="missedMeals">
            <MissedMeals />
          </td>
        </tr>
      </table>
      <table className="dashboard-table">
        <tr className="fourth-row">
          <td id="todays-menu">
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
