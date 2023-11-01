import { memo } from "react";
import "./AnalyticsForm.css";

const AnalyticsForm = memo(() => {
  return (
    <div className="analytics-cards1">
      <div className="total-expenses">
        <div className="total-expenses-child" />
        <div className="text21">
          <div className="total-expenses1">Total expenses</div>
          <b className="kgs">173,000 kgs</b>
          <b className="b7">+8%</b>
        </div>
        <img className="icon36" alt="" src="/icon11.svg" />
      </div>
      <div className="last-logins">
        <div className="total-expenses-child" />
        <div className="text22">
          <div className="last-login">Last login</div>
          <b className="sep-2023">10 Sep, 2023</b>
        </div>
        <img className="icon36" alt="" src="/icon12.svg" />
      </div>
      <div className="last-weeks-expenses">
        <div className="total-expenses-child" />
        <div className="text23">
          <div className="last-weeks-expenses1">Last week’s expenses</div>
          <b className="kgs">5040 kgs</b>
          <b className="b8">-5%</b>
        </div>
        <img className="icon36" alt="" src="/icon13.svg" />
      </div>
      <div className="current-balance">
        <div className="total-expenses-child" />
        <div className="text24">
          <div className="last-weeks-expenses1">Current balance</div>
          <b className="kgs2">1500 kgs</b>
          <b className="b9">+55%</b>
        </div>
        <img className="icon36" alt="" src="/icon14.svg" />
      </div>
    </div>
  );
});

export default AnalyticsForm;
