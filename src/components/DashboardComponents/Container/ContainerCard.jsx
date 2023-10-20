import { useMemo } from "react";
import "./ContainerCard.css";

const ContainerCard = ({
  dataValue,
  metricValue,
  propTop,
  propBottom,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const invitedStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="invited-wrapper" style={frameDivStyle}>
      <div className="invited" style={invitedStyle}>
        <b className="people">{dataValue}</b>
        <div className="total1">{metricValue}</div>
      </div>
    </div>
  );
};

export default ContainerCard;
