import ContainerCard from "../Container/ContainerCard";
import "./WasteReductionContainer.css";

const WasteReductionContainer = () => {
  return (
    <div className="waste-reduction">
      <div className="title7">
        <b className="title8">Waste Reduction</b>
      </div>
      <img className="more-icon" alt="" src="icons/more.svg" />
      <ContainerCard dataValue="200 people" metricValue="Total" />
      <ContainerCard
        dataValue="1,465 points"
        metricValue="Bonus"
        propTop="unset"
        propBottom="44px"
        propWidth="108px"
      />
      <div className="waste-reduction-child" />
      <div className="score">
        <b className="b4">+5.6%</b>
        <div className="food-wasted">Food wasted</div>
        <div className="target-2">Target: -2%</div>
      </div>
    </div>
  );
};

export default WasteReductionContainer;
