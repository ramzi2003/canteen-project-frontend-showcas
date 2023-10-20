import BreadcrumbItemPrevious from "../Breadcrump/BreadcrumbItemPrevious";
import "./DashboardContainer.css";

const DashboardContainer = () => {
  return (
    <div className="breadcrumb1">
      <div className="menu">
        <div className="inputwithaddons">
          <div className="auto-added-frame">
            <div className="addon">
              <img className="icon14" alt="" src="icons/icon13.svg" />
              <div className="addons">Addons</div>
            </div>
          </div>
          <div className="inputfieldtext">
            <div className="type-here">Type here....</div>
            <img className="password-text-icon" alt="" src="icons/line.svg" />
            <div className="minwidth">
              <div className="content4" />
            </div>
          </div>
        </div>
        <div className="listitemdefault">
          <img
            className="ioniconppersondefault1"
            alt=""
            src="icons/ioniconppersondefault.svg"
          />
          <div className="type-here">Log out</div>
        </div>
        <img
          className="ioniconssettingssharp1"
          alt=""
          src="icons/ioniconssettingssharp.svg"
        />
        <img
          className="ioniconnnotificationsdefaul1"
          alt=""
          src="icons/ioniconnnotificationsdefault.svg"
        />
      </div>
      <div className="text12">
        <div className="dashboard">Dashboard</div>
        <BreadcrumbItemPrevious
          breadcrumbItemPreviousWidth="113px"
          breadcrumbItemPreviousPosition="absolute"
          breadcrumbItemPreviousTop="0px"
          breadcrumbItemPreviousLeft="0.5px"
          breadcrumbFontSize="12px"
          breadcrumbLineHeight="100%"
          breadcrumbFontFamily="unset"
          breadcrumbColor="unset"
        />
      </div>
    </div>
  );
};

export default DashboardContainer;
