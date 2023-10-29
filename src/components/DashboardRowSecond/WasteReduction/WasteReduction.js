import React from "react";
import { useState } from "react";

function WasteReduction() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <div
      style={{
        background: `url(${require("../../../assets/images/WasteReductionGraph.png")})`,
        backgroundSize: "100% 100%",
        borderRadius: "2vh",
        fontSize: "1.77vh",
        color: "#ffffff",
        paddingLeft: "3vh",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3vh",
        userSelect: "none"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: "2vh",
        }}
      >
        <p
          style={{
            fontSize: "120%",
            marginTop: "0",
          }}
        >
          <b>Waste Reduction</b>
        </p>
        <div
          style={{
            backgroundColor: isButtonPressed
              ? "rgba(4, 164, 122, 0.5)"
              : isButtonHovered
              ? "#05cd99"
              : "rgba(5, 205, 153, 0.1)",

            padding: "1.5vh",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1.5vh",
          }}
          onMouseEnter={() => {
            setIsButtonHovered(true);
          }}
          onMouseLeave={() => {
            setIsButtonHovered(false);
          }}
          onMouseDown={() => {
            setIsButtonPressed(true);
          }}
          onMouseUp={() => {
            setIsButtonPressed(false);
          }}
        >
          <ion-icon
            name="ellipsis-horizontal"
            style={{ color: isButtonHovered ? "#ffffff" : "#05cd99" }}
          ></ion-icon>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(145deg ,rgba(11, 6, 40, 1), rgba(4, 12, 48, 0.5))",
          width: "30%",
          borderRadius: "13px",
          marginTop: "4vh",
          marginLeft: "3%",
          padding: "1.5vh 3vh",
        }}
      >
        Total
        <p style={{ fontSize: "120%", marginTop: "2%" }}>
          <b>200 people</b>
        </p>
      </div>
      <div
        style={{
          background:
            "linear-gradient(145deg ,rgba(11, 6, 40, 1), rgba(4, 12, 48, 0.5))",
          width: "30%",
          borderRadius: "13px",
          marginTop: "4vh",
          marginLeft: "3%",
          padding: "1.5vh 3vh",
        }}
      >
        Bonus
        <p style={{ fontSize: "120%", marginTop: "2%" }}>
          <b>1,456 points</b>
        </p>
      </div>
    </div>
  );
}

export default WasteReduction;
