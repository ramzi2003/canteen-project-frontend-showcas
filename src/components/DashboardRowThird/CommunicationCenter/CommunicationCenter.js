import React from "react";

function CommunicationCenter() {
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
        width: "96%",
      }}
    >
      <p
        style={{
          fontSize: "120%",
          margin: "0",
        }}
      >
        <b>Communication Center</b>
      </p>
      <p
        style={{
          color: "#05cd99",
        }}
      >
        Last update: 10 Sep, 2023
      </p>
      <div
        style={{
          background:
            "linear-gradient(145deg ,rgba(11, 6, 40, 1), rgba(4, 12, 48, 0.5))",
          width: "70%",
          borderRadius: "1.5vh",
          marginTop: "2vh",
          padding: "2vh",
          paddingLeft: "3vh",
          fontSize: "1.77vh",
        }}
      >
        Independence Day
        <div style={{color: "rgba(160, 174, 192, 1)"}}>
          <p style={{marginBottom: "0"}}>Date: 5 September, 2023</p>
          <p style={{marginTop: "0", marginBottom: "0"}}>15:00 - 16:00</p>
          <p style={{marginTop: "0"}}>Message: Due to Independent Day, canteen will not be working</p>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(145deg ,rgba(11, 6, 40, 1), rgba(4, 12, 48, 0.5))",
          width: "70%",
          borderRadius: "1.5vh",
          marginTop: "2vh",
          padding: "2vh",
          paddingLeft: "3vh",
          fontSize: "1.77vh",
        }}
      >
        Independence Day
        <div style={{color: "rgba(160, 174, 192, 1)"}}>
          <p style={{marginBottom: "0"}}>Date: 5 September, 2023</p>
          <p style={{marginTop: "0", marginBottom: "0"}}>15:00 - 16:00</p>
          <p style={{marginTop: "0"}}>Message: Due to Independent Day, canteen will not be working</p>
        </div>
      </div>
    </div>
  );
}

export default CommunicationCenter;
