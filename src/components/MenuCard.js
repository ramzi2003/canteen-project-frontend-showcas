import { memo } from "react";
import "./MenuCard.css";

const MenuCard = memo(() => {
  return (
    <div className="first-card1">
      <div className="background13">
        <div className="background-child14" />
      </div>
      <div className="dinner">
        <div className="more">
          <div className="text13">More</div>
          <img
            className="ioniconaarrowforward"
            alt=""
            src="/ioniconaarrowforward.svg"
          />
        </div>
        <div className="items4">
          <div className="soft-ui-xd">
            <img className="line-icon6" alt="" src="/line1.svg" />
            <div className="content11">
              <div className="budget">
                <b className="creamy-mushroom-risotto">
                  Creamy mushroom risotto with Parmesan cheese
                </b>
                <b className="vegetarian-contains-dairy">
                  Vegetarian, contains dairy and gluten
                </b>
              </div>
              <div className="title6">
                <div className="beef-stir-fry">Beef Stir-Fry</div>
              </div>
            </div>
          </div>
        </div>
        <img className="dinner-child" alt="" src="/vector-3.svg" />
        <div className="titles1">
          <div className="dietary-info">DIETARY INFO</div>
          <div className="description">DESCRIPTION</div>
          <div className="price">PRICE</div>
          <div className="food">FOOD</div>
        </div>
        <div className="dinner1">Dinner</div>
      </div>
      <div className="lunch">
        <div className="more1">
          <div className="text13">More</div>
          <img
            className="ioniconaarrowforward"
            alt=""
            src="/ioniconaarrowforward.svg"
          />
        </div>
        <div className="items5">
          <div className="soft-ui-xd1">
            <img className="line-icon7" alt="" src="/line2.svg" />
            <div className="content12">
              <div className="budget1">
                <b className="grilled-chicken-breast">
                  Grilled chicken breast, crisp romaine lettuce..
                </b>
                <b className="high-in-protein">
                  High in protein, contains dairy and gluten
                </b>
              </div>
              <div className="title7">
                <div className="beef-stir-fry">
                  Grilled Chicken Caesar Salad
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="dinner-child" alt="" src="/vector-3.svg" />
        <div className="titles1">
          <div className="dietary-info">DIETARY INFO</div>
          <div className="description">DESCRIPTION</div>
          <div className="price">PRICE</div>
          <div className="food">FOOD</div>
        </div>
        <div className="lunch1">Lunch</div>
      </div>
      <div className="breakfast">
        <div className="more2">
          <div className="text13">More</div>
          <img
            className="ioniconaarrowforward"
            alt=""
            src="/ioniconaarrowforward.svg"
          />
        </div>
        <div className="items5">
          <div className="soft-ui-xd1">
            <img className="line-icon7" alt="" src="/line2.svg" />
            <div className="content12">
              <div className="budget1">
                <b className="scrambled-eggs-melted">
                  Scrambled eggs, melted cheese...
                </b>
                <b className="high-in-protein">
                  High in protein, contains dairy and gluten
                </b>
              </div>
              <div className="title7">
                <div className="beef-stir-fry">
                  Egg and Cheese Breakfast Burrito
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="dinner-child" alt="" src="/vector-3.svg" />
        <div className="titles1">
          <div className="dietary-info">DIETARY INFO</div>
          <div className="description">DESCRIPTION</div>
          <div className="price">PRICE</div>
          <div className="food">FOOD</div>
        </div>
        <div className="breakfast1">Breakfast</div>
      </div>
      <b className="todayss-menu">Todays’s menu</b>
    </div>
  );
});

export default MenuCard;
