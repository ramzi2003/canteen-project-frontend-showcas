import { memo } from "react";
import "./WasteReductionContainer.css";

const WasteReductionContainer = memo(() => {
  return (
    <div className="waste-reduction">
      <div className="title9">
        <b className="title10">Waste Reduction</b>
      </div>
      <img className="more-icon" alt="" src="/more.svg" />
      <div className="invited-wrapper">
        <div className="invited">
          <b className="people">200 people</b>
          <div className="bonus">Total</div>
        </div>
      </div>
      <div className="invited-container">
        <div className="invited1">
          <b className="people">1,465 points</b>
          <div className="bonus">Bonus</div>
        </div>
      </div>
      <div className="waste-reduction-child" />
      <div className="score">
        <b className="b5">+5.6%</b>
        <div className="food-wasted">Food wasted</div>
        <div className="target-2">Target: -2%</div>
      </div>
    </div>
  );
});

export default WasteReductionContainer;
