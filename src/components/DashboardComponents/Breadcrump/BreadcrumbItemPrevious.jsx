import { useMemo } from "react";
import "./BreadcrumbItemPrevious.css";

const BreadcrumbItemPrevious = ({
  breadcrumb,
  breadcrumbItemPreviousWidth,
  breadcrumbItemPreviousPosition,
  breadcrumbItemPreviousTop,
  breadcrumbItemPreviousLeft,
  breadcrumbFontSize,
  breadcrumbLineHeight,
  breadcrumbFontFamily,
  breadcrumbColor,
}) => {
  const breadcrumbItemPreviousStyle = useMemo(() => {
    return {
      width: breadcrumbItemPreviousWidth,
      position: breadcrumbItemPreviousPosition,
      top: breadcrumbItemPreviousTop,
      left: breadcrumbItemPreviousLeft,
    };
  }, [
    breadcrumbItemPreviousWidth,
    breadcrumbItemPreviousPosition,
    breadcrumbItemPreviousTop,
    breadcrumbItemPreviousLeft,
  ]);

  const breadcrumbStyle = useMemo(() => {
    return {
      fontSize: breadcrumbFontSize,
      lineHeight: breadcrumbLineHeight,
      fontFamily: breadcrumbFontFamily,
      color: breadcrumbColor,
    };
  }, [
    breadcrumbFontSize,
    breadcrumbLineHeight,
    breadcrumbFontFamily,
    breadcrumbColor,
  ]);

  return (
    <div className="breadcrumbitemprevious" style={breadcrumbItemPreviousStyle}>
      <div className="breadcrumb" style={breadcrumbStyle}>
        {breadcrumb}
      </div>
    </div>
  );
};

export default BreadcrumbItemPrevious;
