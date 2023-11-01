import { memo } from "react";
import "./OrderOverviewCard.css";

const OrderOverviewCard = memo(() => {
  return (
    <div className="second-card">
      <div className="background12">
        <div className="background-child13" />
      </div>
      <div className="list1">
        <div className="items">
          <div className="items">
            <div className="title1">
              <div className="sep-720-am">4 SEP 7:20 AM</div>
              <div className="kgs-breakfast">400 kgs, Breakfast</div>
            </div>
            <img className="icon26" alt="" src="/icon6.svg" />
            <img className="line-icon1" alt="" src="/line.svg" />
          </div>
        </div>
      </div>
      <div className="list2">
        <div className="items">
          <div className="items">
            <div className="title1">
              <div className="sep-720-am">2 SEP 7:20 AM</div>
              <div className="kgs-breakfast">600 kgs, Breakfast</div>
            </div>
            <img className="icon26" alt="" src="/icon6.svg" />
            <img className="line-icon1" alt="" src="/line.svg" />
          </div>
        </div>
      </div>
      <div className="list3">
        <div className="design-changes2">
          <div className="title3">
            <div className="sep-620-pm">4 SEP 6:20 PM</div>
            <div className="kgs-dinner">400 kgs, Dinner</div>
          </div>
          <img className="icon28" alt="" src="/icon6.svg" />
          <img className="line-icon1" alt="" src="/line.svg" />
        </div>
      </div>
      <div className="list4">
        <div className="items2">
          <div className="items2">
            <div className="title4">
              <div className="sep-620-pm">2 SEP 1:20 PM</div>
              <div className="kgs-lunch">200 kgs, Lunch</div>
            </div>
            <img className="icon29" alt="" src="/icon6.svg" />
            <img className="line-icon1" alt="" src="/line.svg" />
          </div>
        </div>
      </div>
      <div className="list5">
        <div className="items3">
          <div className="items3">
            <div className="title5">
              <div className="sep-1020-am">2 SEP 10:20 AM</div>
              <div className="kgs-snack">100 kgs, Snack</div>
            </div>
            <img className="icon30" alt="" src="/icon6.svg" />
            <img className="line-icon1" alt="" src="/line.svg" />
          </div>
        </div>
      </div>
      <b className="orders-overview">Orders overview</b>
    </div>
  );
});

export default OrderOverviewCard;
