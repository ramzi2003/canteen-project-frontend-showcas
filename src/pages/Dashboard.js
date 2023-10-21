import React from "react";

import "../styles/Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <table className="dashboard-table">
        <tr className="first-row">
          <td className="dashboard-first-row">
            <div
              style={{
                background:
                  "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
                borderRadius: "15px",
                fontSize: "1.77vh",
                color: "#ffffff",
                paddingLeft: "3vh",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "3vh",
                width: "84%",
              }}
            >
              <div style={{ lineHeight: "0.6vh" }}>
                <p style={{ fontWeight: "300" }}>Current balance</p> <br />
                <b>1500 KGS</b>
                <span style={{ color: "#05cd99" }}> +55%</span>
              </div>
              <div
                style={{
                  backgroundColor: "#05cd99",
                  borderRadius: "10px",
                  height: "5vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5vh",
                }}
              >
                <ion-icon name="wallet"></ion-icon>
              </div>
            </div>
          </td>
          <td className="dashboard-second-row">
            <div
              style={{
                background:
                  "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
                borderRadius: "15px",
                fontSize: "1.77vh",
                color: "#ffffff",
                paddingLeft: "3vh",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "3vh",
                width: "84%",
              }}
            >
              <div style={{ lineHeight: "0.6vh" }}>
                <p style={{ fontWeight: "300" }}>Last week's expenses</p> <br />
                <b>5040 KGS</b>
                <span style={{ color: "#05cd99" }}> -5%</span>
              </div>
              <div
                style={{
                  backgroundColor: "#05cd99",
                  borderRadius: "10px",
                  height: "5vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5vh",
                }}
              >
                <ion-icon name="globe"></ion-icon>
              </div>
            </div>
          </td>
          <td className="dashboard-third-row">
            <div
              style={{
                background:
                  "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
                borderRadius: "15px",
                fontSize: "1.77vh",
                color: "#ffffff",
                paddingLeft: "3vh",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "3vh",
                width: "84%",
              }}
            >
              <div style={{ lineHeight: "0.6vh" }}>
                <p style={{ fontWeight: "300" }}>Last login</p> <br />
                <b>10 September, 2023</b>
              </div>
              <div
                style={{
                  backgroundColor: "#05cd99",
                  borderRadius: "10px",
                  height: "5vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5vh",
                }}
              >
                <ion-icon name="document-text"></ion-icon>
              </div>
            </div>
          </td>
          <td className="dashboard-third-row">
            <div
              style={{
                background:
                  "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
                borderRadius: "15px",
                fontSize: "1.77vh",
                color: "#ffffff",
                paddingLeft: "3vh",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "3vh",
                width: "84%",
              }}
            >
              <div style={{ lineHeight: "0.6vh" }}>
                <p style={{ fontWeight: "300" }}>Total expenses</p> <br />
                <b>173,000 KGS</b>
                <span style={{ color: "#05cd99" }}> +8%</span>
              </div>
              <div
                style={{
                  backgroundColor: "#05cd99",
                  borderRadius: "10px",
                  height: "5vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5vh",
                }}
              >
                <ion-icon name="cart"></ion-icon>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Dashboard;
