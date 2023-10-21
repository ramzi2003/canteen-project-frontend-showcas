import React from "react";

function TodaysMenu() {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg ,rgba(41, 63, 177, 0.74), rgba(26, 31, 55, 0.5))",
        borderRadius: "15px",
        fontSize: "1.77vh",
        color: "#ffffff",
        paddingLeft: "3vh",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3vh",
        paddingRight: "3vh",
        width: "94%",
      }}
    >
      <p
        style={{
          fontSize: "120%",
          margin: "0",
        }}
      >
        <b>Today's Menu</b>
      </p>
      <div>
        <p style={{ color: "#A0AEC0"}}><b>Breakfast</b></p>
      <table style={{ marginTop: "0", borderCollapse: "collapse"}}>
        <tr style={{ color: "#A0AEC0", fontSize: "1.6vh", borderBottom: "1px solid #56577A"}}>
          <td style={{ width: "42%"}}>FOOD</td>
          <td style={{ width: "22%"}}>PRICE</td>
          <td style={{ width: "19%"}}>DESCRIPTION</td>
          <td style={{ width: "17%"}}>DIETARY INFO</td>
        </tr>
        <tr style={{height: "10vh", borderBottom: "1px solid #56577A"}}>
          <td>Egg and Cheese Breakfast Burrito</td>
          <td></td>
          <td>Scrambled eggs, melted cheese...</td>
          <td>High in protein, contains dairy and gluten</td>
        </tr>
      </table>
      </div>
      <div>
        <p style={{ color: "#A0AEC0"}}><b>Lunch</b></p>
      <table style={{ marginTop: "0", borderCollapse: "collapse"}}>
        <tr style={{ color: "#A0AEC0", fontSize: "1.6vh", borderBottom: "1px solid #56577A"}}>
          <td style={{ width: "42%"}}>FOOD</td>
          <td style={{ width: "22%"}}>PRICE</td>
          <td style={{ width: "19%"}}>DESCRIPTION</td>
          <td style={{ width: "17%"}}>DIETARY INFO</td>
        </tr>
        <tr style={{height: "10vh", borderBottom: "1px solid #56577A"}}>
          <td>Grilled Chicken Caesar Salad</td>
          <td></td>
          <td>Grilled chicken breast, crisp romaine lettuce..</td>
          <td>High in protein, contains dairy and gluten</td>
        </tr>
      </table>
      </div>
      <div>
        <p style={{ color: "#A0AEC0"}}><b>Dinner</b></p>
      <table style={{ marginTop: "0", borderCollapse: "collapse"}}>
        <tr style={{ color: "#A0AEC0", fontSize: "1.6vh", borderBottom: "1px solid #56577A"}}>
          <td style={{ width: "42%"}}>FOOD</td>
          <td style={{ width: "22%"}}>PRICE</td>
          <td style={{ width: "19%"}}>DESCRIPTION</td>
          <td style={{ width: "17%"}}>DIETARY INFO</td>
        </tr>
        <tr style={{height: "10vh", borderBottom: "1px solid #56577A"}}>
          <td>Beef Stir-Fry</td>
          <td></td>
          <td>Creamy mushroom risotto with Parmesan cheese</td>
          <td>Vegetarian, contains dairy and gluten</td>
        </tr>
      </table>
      </div>
    </div>
  );
}

export default TodaysMenu;
