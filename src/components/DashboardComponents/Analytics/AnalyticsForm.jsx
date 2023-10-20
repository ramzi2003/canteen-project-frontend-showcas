import "./AnalyticsForm.css";

const AnalyticsForm = () => {
  return (
    <div className="analytics-cards1">
      <div className="total-expenses">
        <div className="total-expenses-child" />
        <div className="text8">
          <div className="total-expenses1">Total expenses</div>
          <b className="kgs">173,000 kgs</b>
          <b className="b6">+8%</b>
        </div>
        <img className="icon10" alt="" src="icons/icon9.svg" />
      </div>
      <div className="last-logins">
        <div className="total-expenses-child" />
        <div className="text9">
          <div className="last-login">Last login</div>
          <b className="sep-2023">10 Sep, 2023</b>
        </div>
        <img className="icon10" alt="" src="icons/icon10.svg" />
      </div>
      <div className="last-weeks-expenses">
        <div className="total-expenses-child" />
        <div className="text10">
          <div className="last-weeks-expenses1">Last week’s expenses</div>
          <b className="kgs">5040 kgs</b>
          <b className="b7">-5%</b>
        </div>
        <img className="icon10" alt="" src="icons/icon11.svg" />
      </div>
      <div className="current-balance">
        <div className="total-expenses-child" />
        <div className="text11">
          <div className="last-weeks-expenses1">Current balance</div>
          <b className="kgs2">1500 kgs</b>
          <b className="b8">+55%</b>
        </div>
        <img className="icon10" alt="" src="icons/icon12.svg" />
      </div>
    </div>
  );
};

export default AnalyticsForm;
