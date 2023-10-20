import { useMemo } from "react";
import "./DinnerCard.css";

const DinnerCard = ({
  iconName,
  descriptionText,
  dishDescription,
  dietaryInfo,
  menuItemImageUrl,
  vectorIconName,
  mealImageUrl,
  propTop,
  propLeft,
  propTop1,
  propLeft1,
  propTop2,
  propHeight,
  propHeight1,
  propTop3,
  propHeight2,
  propHeight3,
  propWidth,
  propHeight4,
  propTop4,
  propTop5,
  propWidth1,
}) => {
  const dinnerStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const moreStyle = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft1,
    };
  }, [propTop1, propLeft1]);

  const itemsStyle = useMemo(() => {
    return {
      top: propTop2,
      height: propHeight,
    };
  }, [propTop2, propHeight]);

  const softUIXDStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const lineIconStyle = useMemo(() => {
    return {
      top: propTop3,
    };
  }, [propTop3]);

  const contentStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const budgetStyle = useMemo(() => {
    return {
      height: propHeight3,
    };
  }, [propHeight3]);

  const creamyMushroomRisottoStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight4,
    };
  }, [propWidth, propHeight4]);

  const vegetarianContainsDairyStyle = useMemo(() => {
    return {
      top: propTop4,
    };
  }, [propTop4]);

  const titleStyle = useMemo(() => {
    return {
      top: propTop5,
    };
  }, [propTop5]);

  const dinner1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="dinner" style={dinnerStyle}>
      <div className="more" style={moreStyle}>
        <div className="text1">More</div>
        <img className="ioniconaarrowforward1" alt="" src={iconName} />
      </div>
      <div className="items4" style={itemsStyle}>
        <div className="soft-ui-xd" style={softUIXDStyle}>
          <img
            className="line-icon5"
            alt=""
            src={descriptionText}
            style={lineIconStyle}
          />
          <div className="content" style={contentStyle}>
            <div className="budget" style={budgetStyle}>
              <b
                className="creamy-mushroom-risotto"
                style={creamyMushroomRisottoStyle}
              >
                {dishDescription}
              </b>
              <b
                className="vegetarian-contains-dairy"
                style={vegetarianContainsDairyStyle}
              >
                {dietaryInfo}
              </b>
            </div>
            <div className="title5" style={titleStyle}>
              <div className="beef-stir-fry">{menuItemImageUrl}</div>
            </div>
          </div>
        </div>
      </div>
      <img className="dinner-child" alt="" src={vectorIconName} />
      <div className="titles">
        <div className="dietary-info">DIETARY INFO</div>
        <div className="description">DESCRIPTION</div>
        <div className="price">PRICE</div>
        <div className="food">FOOD</div>
      </div>
      <div className="dinner1" style={dinner1Style}>
        {mealImageUrl}
      </div>
    </div>
  );
};

export default DinnerCard;
