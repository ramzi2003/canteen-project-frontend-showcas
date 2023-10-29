import React from "react";
import MissedMealsGraph from "../../../assets/images/MissedMealsGraph.png";

function MissedMeals() {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
        borderRadius: "2vh",
        fontSize: "1.77vh",
        color: "#ffffff",
        paddingLeft: "3vh",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3vh",
        paddingRight: "3vh",
      }}
    >
      <img
        src={MissedMealsGraph}
        alt="Missed Meals graph"
        style={{ width: "100%", height: "50%" }}
      />
      <div>
        <p
          style={{ fontSize: "2.5vh", fontWeight: "500", marginBottom: "1vh" }}
        >
          Missed <br /> meals
        </p>
        <p style={{ marginTop: "0" }}>
          <span style={{ fontSize: "1.77vh", color: "#05cd99" }}>(+23) </span>
          than last week
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flex: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#05cd99",
                width: "4vh",
                height: "4vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1vh",
                marginRight: "1vh",
              }}
            >
              <ion-icon name="wallet"></ion-icon>
            </div>
            Breakfast
          </div>
          <p style={{ fontSize: "2.5vh" }}>
            <b>10</b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flex: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#05cd99",
                width: "4vh",
                height: "4vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1vh",
                marginRight: "1vh",
              }}
            >
              <ion-icon name="rocket"></ion-icon>
            </div>
            Lunch
          </div>
          <p style={{ fontSize: "2.5vh" }}>
            <b>3</b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flex: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#05cd99",
                width: "4vh",
                height: "4vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1vh",
                marginRight: "1vh",
              }}
            >
              <ion-icon name="cart"></ion-icon>
            </div>
            Dinner
          </div>
          <p style={{ fontSize: "2.5vh" }}>
            <b>2</b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flex: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#05cd99",
                width: "4vh",
                height: "4vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1vh",
                marginRight: "1vh",
              }}
            >
              <ion-icon name="build"></ion-icon>
            </div>
            Total
          </div>
          <p style={{ fontSize: "2.5vh" }}>
            <b>15</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissedMeals;
