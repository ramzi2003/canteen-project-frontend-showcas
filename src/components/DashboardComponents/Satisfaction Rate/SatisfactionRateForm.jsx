import "./SatisfactionRateForm.css";

const SatisfactionRateForm = () => {
  return (
    <div className="satisfaction-rate">
      <div className="titlesubtitle">
        <b className="title9">Satisfaction Rate</b>
        <div className="from-all-kitchen">From all kitchen services</div>
      </div>
      <img className="progress-bar-icon" alt="" src="icons/progress-bar.svg" />
      <div className="content2">
        <div className="content3">
          <b className="b5">95%</b>
          <div className="based-on-your">Based on your likes</div>
          <div className="div6">0%</div>
          <div className="div7">100%</div>
        </div>
      </div>
      <img className="icon9" alt="" src="icons/icon8.svg" />
    </div>
  );
};

export default SatisfactionRateForm;
