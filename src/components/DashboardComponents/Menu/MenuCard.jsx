import DinnerCard from "./DinnerCard";
import "./MenuCard.css";

const MenuCard = () => {
  return (
    <div className="first-card1">
      <div className="background2">
        <div className="background-inner" />
      </div>
      <DinnerCard
        iconName="icons/ioniconaarrowforward.svg"
        descriptionText="icons/line1.svg"
        dishDescription="Creamy mushroom risotto with Parmesan cheese"
        dietaryInfo="Vegetarian, contains dairy and gluten"
        menuItemImageUrl="Beef Stir-Fry"
        vectorIconName="icons/vector-3.svg"
        mealImageUrl="Dinner"
      />
      <DinnerCard
        iconName="/ioniconaarrowforward1.svg"
        descriptionText="icons/line2.svg"
        dishDescription="Grilled chicken breast, crisp romaine lettuce.."
        dietaryInfo="High in protein, contains dairy and gluten"
        menuItemImageUrl="Grilled Chicken Caesar Salad"
        vectorIconName="icons/vector-31.svg"
        mealImageUrl="Lunch"
        propTop="calc(50% - 42.5px)"
        propLeft="calc(50% - 507.5px)"
        propTop1="calc(50% + 56.55px)"
        propLeft1="calc(50% + 460.87px)"
        propTop2="73.28px"
        propHeight="44.67px"
        propHeight1="44.67px"
        propTop3="44.17px"
        propHeight2="34.13px"
        propHeight3="34.13px"
        propWidth="136px"
        propHeight4="34.13px"
        propTop4="0px"
        propTop5="4.02px"
        propWidth1="44px"
      />
      <div className="breakfast">
        <div className="more1">
          <div className="text2">More</div>
          <img
            className="ioniconaarrowforward2"
            alt=""
            src="icons/ioniconaarrowforward2.svg"
          />
        </div>
        <div className="items5">
          <div className="soft-ui-xd1">
            <img className="line-icon6" alt="" src="icons/line2.svg" />
            <div className="content1">
              <div className="budget1">
                <b className="scrambled-eggs-melted">
                  Scrambled eggs, melted cheese...
                </b>
                <b className="high-in-protein">
                  High in protein, contains dairy and gluten
                </b>
              </div>
              <div className="title6">
                <div className="egg-and-cheese">
                  Egg and Cheese Breakfast Burrito
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="lines-icon" alt="" src="icons/vector-31.svg" />
        <div className="titles1">
          <div className="dietary-info1">DIETARY INFO</div>
          <div className="description1">DESCRIPTION</div>
          <div className="price1">PRICE</div>
          <div className="food1">FOOD</div>
        </div>
        <div className="breakfast1">Breakfast</div>
      </div>
      <b className="todayss-menu">Todays’s menu</b>
    </div>
  );
};

export default MenuCard;
