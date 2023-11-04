import { memo } from "react";
import BreadcrumbItemPrevious from "./BreadcrumbItemPrevious";
import "./DashboardContainer.css";

const DashboardContainer = memo(() => {
  return (
    <div className="breadcrumb13">
      <div className="menu13">
        <div className="inputwithaddons9">
          <div className="auto-added-frame9">
            <div className="addon9">
              <img className="icon40" alt="" src="/icon15.svg" />
              <div className="addons9">Addons</div>
            </div>
          </div>
          <div className="inputfieldtext10">
            <div className="type-here9">Type here...</div>
            <img
              className="password-text-icon10"
              alt=""
              src="/password-text.svg"
            />
            <div className="minwidth11">
              <div className="content16" />
            </div>
          </div>
        </div>
        <div className="listitemdefault9">
          <img
            className="ioniconppersondefault15"
            alt=""
            src="/ioniconppersondefault.svg"
          />
          <div className="type-here9">Log out</div>
        </div>
        <img
          className="ioniconssettingssharp9"
          alt=""
          src="/ioniconssettingssharp2.svg"
        />
        <img
          className="ioniconnnotificationsdefaul9"
          alt=""
          src="/ioniconnnotificationsdefault2.svg"
        />
      </div>
      <div className="text25">
        <div className="dashboard6">Dashboard</div>
        <BreadcrumbItemPrevious
          breadcrumbItemPreviousWidth="7.06em"
          breadcrumbItemPreviousPosition="absolute"
          breadcrumbItemPreviousTop="0em"
          breadcrumbItemPreviousLeft="0.03em"
          breadcrumbFontSize="0.75em"
          breadcrumbColor="unset"
          breadcrumbLineHeight="100%"
          breadcrumbFontFamily="unset"
        />
      </div>
    </div>
  );
});

export default DashboardContainer;
