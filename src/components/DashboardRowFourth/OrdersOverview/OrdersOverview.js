import React from "react";

function OrdersOverview() {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
        borderRadius: "2vh",
        fontSize: "1.77vh",
        color: "#ffffff",
        paddingLeft: "3vh",
        paddingBottom: "3vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3vh",
        paddingRight: "3vh",
      }}
    >
      <p
        style={{
          fontSize: "120%",
          marginTop: "0",
        }}
      >
        <b>Order's Overview</b>
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "40%", 
          marginTop: "5vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ion-icon
            name="notifications"
            style={{ color: "#05cd99", marginRight: "3vh" }}
          ></ion-icon>
          600 KGS, Breakfast
        </div>
        <p style={{ color: "#A0AEC0" }}>2 SEP 7:20 AM</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "40%", 
          marginTop: "5vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ion-icon
            name="notifications"
            style={{ color: "#05cd99", marginRight: "3vh" }}
          ></ion-icon>
          600 KGS, Breakfast
        </div>
        <p style={{ color: "#A0AEC0" }}>2 SEP 7:20 AM</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "40%", 
          marginTop: "5vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ion-icon
            name="notifications"
            style={{ color: "#05cd99", marginRight: "3vh" }}
          ></ion-icon>
          600 KGS, Breakfast
        </div>
        <p style={{ color: "#A0AEC0" }}>2 SEP 7:20 AM</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "40%", 
          marginTop: "5vh"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ion-icon
            name="notifications"
            style={{ color: "#05cd99", marginRight: "3vh" }}
          ></ion-icon>
          600 KGS, Breakfast
        </div>
        <p style={{ color: "#A0AEC0" }}>2 SEP 7:20 AM</p>
      </div>
    </div>
  );
}

export default OrdersOverview;
