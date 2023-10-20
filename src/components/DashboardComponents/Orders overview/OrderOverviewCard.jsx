import "./OrderOverviewCard.css";

const OrderOverviewCard = () => {
  return (
    <div className="second-card">
      <div className="background1">
        <div className="background-item" />
      </div>
      <div className="list">
        <div className="items">
          <div className="items">
            <div className="title">
              <div className="sep-720-am">4 SEP 7:20 AM</div>
              <div className="kgs-breakfast">400 kgs, Breakfast</div>
            </div>
            <img className="icon" alt="" src="icons/icon.svg" />
            <img className="line-icon" alt="" src="icons/line.svg" />
          </div>
        </div>
      </div>
      <div className="list1">
        <div className="items">
          <div className="items">
            <div className="title">
              <div className="sep-720-am">2 SEP 7:20 AM</div>
              <div className="kgs-breakfast">600 kgs, Breakfast</div>
            </div>
            <img className="icon" alt="" src="icons/icon1.svg" />
            <img className="line-icon" alt="" src="icons/line.svg" />
          </div>
        </div>
      </div>
      <div className="list2">
        <div className="design-changes2">
          <div className="title2">
            <div className="sep-620-pm">4 SEP 6:20 PM</div>
            <div className="kgs-dinner">400 kgs, Dinner</div>
          </div>
          <img className="icon2" alt="" src="icons/icon2.svg" />
          <img className="line-icon" alt="" src="icons/line.svg" />
        </div>
      </div>
      <div className="list3">
        <div className="items2">
          <div className="items2">
            <div className="title3">
              <div className="sep-620-pm">2 SEP 1:20 PM</div>
              <div className="kgs-lunch">200 kgs, Lunch</div>
            </div>
            <img className="icon3" alt="" src="icons/icon3.svg" />
            <img className="line-icon" alt="" src="icons/line.svg" />
          </div>
        </div>
      </div>
      <div className="list4">
        <div className="items3">
          <div className="items3">
            <div className="title4">
              <div className="sep-1020-am">2 SEP 10:20 AM</div>
              <div className="kgs-snack">100 kgs, Snack</div>
            </div>
            <img className="icon4" alt="" src="icons/icon4.svg" />
            <img className="line-icon" alt="" src="icons/line.svg" />
          </div>
        </div>
      </div>
      <b className="orders-overview">Orders overview</b>
    </div>
  );
};

export default OrderOverviewCard;
