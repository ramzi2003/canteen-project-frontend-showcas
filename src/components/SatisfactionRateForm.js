import { memo } from "react";
import "./SatisfactionRateForm.css";

const SatisfactionRateForm = memo(() => {
  return (
    <div className="satisfaction-rate">
      <div className="titlesubtitle">
        <b className="title11">Satisfaction Rate</b>
        <div className="from-all-kitchen">From all kitchen services</div>
      </div>
      <img className="progress-bar-icon" alt="" src="/progress-bar.svg" />
      <img className="progress-bar-icon" alt="" src="/progress-bar1.svg" />
      <div className="content14">
        <div className="content15">
          <b className="b6">95%</b>
          <div className="based-on-your">Based on your likes</div>
          <div className="div23">0%</div>
          <div className="div24">100%</div>
        </div>
      </div>
      <img className="icon35" alt="" src="/icon10.svg" />
    </div>
  );
});

export default SatisfactionRateForm;
