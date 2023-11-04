import { memo } from "react";
import "./FilteredForm.css";

const FilteredForm = memo(() => {
  return (
    <div className="first-card2">
      <img className="background-icon1" alt="" src="/background.svg" />
      <div className="cards">
        <div className="items7">
          <div className="text16">
            <div className="total">Total</div>
            <b className="b1">15</b>
          </div>
          <div className="icon31">
            <div className="icon-child" />
            <img
              className="ioniconbbuilddefault4"
              alt=""
              src="/ioniconbbuilddefault1.svg"
            />
          </div>
        </div>
        <div className="sales">
          <div className="text17">
            <div className="dinner2">Dinner</div>
            <b className="b2">2</b>
          </div>
          <img className="icon32" alt="" src="/icon7.svg" />
        </div>
        <div className="clicks">
          <div className="text18">
            <div className="lunch2">Lunch</div>
            <b className="b3">3</b>
          </div>
          <img className="icon32" alt="" src="/icon8.svg" />
        </div>
        <div className="users">
          <div className="text19">
            <div className="breakfast2">Breakfast</div>
            <b className="b4">10</b>
          </div>
          <img className="icon32" alt="" src="/icon9.svg" />
        </div>
      </div>
      <div className="text20">
        <div className="than-last-week-container">
          <b>(+23)</b>
          <span className="than-last-week"> than last week</span>
        </div>
        <b className="missed-meals">Missed meals</b>
      </div>
      <div className="graph">
        <div className="background16">
          <div className="background-child17" />
        </div>
        <div className="background16">
          <div className="background-child17" />
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
          <div className="div17">0</div>
          <div className="div18">100</div>
          <div className="div19">200</div>
          <div className="div20">300</div>
          <div className="div21">400</div>
          <div className="div22">500</div>
        </div>
      </div>
    </div>
  );
});

export default FilteredForm;
