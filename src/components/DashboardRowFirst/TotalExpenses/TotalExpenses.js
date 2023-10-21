import React from "react";

function TotalExpenses() {
  return (
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
  );
}

export default TotalExpenses;
