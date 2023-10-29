import React from "react";


function UserCard() {
  return (
    <div
      style={{
        background: `url(${require("../../../assets/images/UserCardBackground.png")})`,
        backgroundSize: 'cover',
        borderRadius: "2vh",
        fontSize: "1.77vh",
        color: "#ffffff",
        paddingLeft: "3vh",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3vh",
        width: "94%",
      }}
    >
      <p>Welcome back,</p>
      <p className="user-name" style={{
        fontSize: "250%",
        margin: "0",
        fontWeight: "600",
        lineHeight: "60%"
      }}>Ivan Ivanov</p>
      <p>Glad to see you again!</p>
    </div>
  );
}

export default UserCard;
