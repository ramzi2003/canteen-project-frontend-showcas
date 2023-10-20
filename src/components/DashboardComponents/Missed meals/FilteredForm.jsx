import "./FilteredForm.css";

const FilteredForm = () => {
  return (
    <div className="first-card2">
      <img className="background-icon1" alt="" src="icons/background.svg" />
      <div className="cards">
        <div className="items6">
          <div className="text3">
            <div className="total">Total</div>
            <b className="b">15</b>
          </div>
          <div className="icon5">
            <div className="icon-child" />
            <img
              className="ioniconbbuilddefault1"
              alt=""
              src="icons/ioniconbbuilddefault.svg"
            />
          </div>
        </div>
        <div className="sales">
          <div className="text4">
            <div className="dinner2">Dinner</div>
            <b className="b1">2</b>
          </div>
          <img className="icon6" alt="" src="icons/icon5.svg" />
        </div>
        <div className="clicks">
          <div className="text5">
            <div className="lunch">Lunch</div>
            <b className="b2">3</b>
          </div>
          <img className="icon6" alt="" src="icons/icon6.svg" />
        </div>
        <div className="users">
          <div className="text6">
            <div className="breakfast2">Breakfast</div>
            <b className="b3">10</b>
          </div>
          <img className="icon6" alt="" src="icons/icon7.svg" />
        </div>
      </div>
      <div className="text7">
        <div className="than-last-week-container">
          <b>(+23)</b>
          <span className="than-last-week"> than last week</span>
        </div>
        <b className="missed-meals">Missed meals</b>
      </div>
      <div className="graph">
        <div className="background5">
          <div className="background-child2" />
        </div>
        <div className="lines">
          <div className="lines-child" />
          <div className="lines-item" />
          <div className="lines-inner" />
          <div className="lines-child1" />
          <div className="lines-child2" />
          <div className="lines-child3" />
          <div className="lines-child4" />
          <div className="lines-child5" />
          <div className="lines-child6" />
        </div>
        <div className="data">
          <div className="div">0</div>
          <div className="div1">100</div>
          <div className="div2">200</div>
          <div className="div3">300</div>
          <div className="div4">400</div>
          <div className="div5">500</div>
        </div>
      </div>
    </div>
  );
};

export default FilteredForm;
