import React from "react";

function LastWeekExpenses() {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
        borderRadius: "2vh",
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
          borderRadius: "1.5vh",
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
  );
}

export default LastWeekExpenses;
