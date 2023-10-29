import React from "react";

import Rate from "../../../assets/images/SatisfactionRateProgessBar.png";

function SatisfactionRate() {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
        borderRadius: "2vh",
        fontSize: "1.77vh",
        color: "#ffffff",
        paddingLeft: "3vh",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3vh",
        width: "90%",
      }}
    >
      <p
        style={{
          fontSize: "120%",
          margin: "0",
        }}
      >
        <b>Satisfaction Rate</b>
      </p>
      <p
        style={{
          margin: "0",
          color: "rgba(160, 174, 192, 1)",
        }}
      >
        From all kitchen services
      </p>
      <img
        src={Rate}
        alt="Satisfaction Rate"
        style={{
          width: "90%",
          height: "80%",
          position: "relative",
        }}
      />
    </div>
  );
}

export default SatisfactionRate;
