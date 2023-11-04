import { memo, useMemo } from "react";
import "./BreadcrumbItemPrevious.css";

const BreadcrumbItemPrevious = memo(
  ({
    breadcrumb,
    breadcrumbItemPreviousWidth,
    breadcrumbItemPreviousPosition,
    breadcrumbItemPreviousTop,
    breadcrumbItemPreviousLeft,
    breadcrumbFontSize,
    breadcrumbColor,
    breadcrumbLineHeight,
    breadcrumbFontFamily,
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
        color: breadcrumbColor,
        lineHeight: breadcrumbLineHeight,
        fontFamily: breadcrumbFontFamily,
      };
    }, [
      breadcrumbFontSize,
      breadcrumbColor,
      breadcrumbLineHeight,
      breadcrumbFontFamily,
    ]);

    return (
      <div
        className="breadcrumbitemprevious"
        style={breadcrumbItemPreviousStyle}
      >
        <div className="breadcrumb" style={breadcrumbStyle}>
          {breadcrumb}
        </div>
      </div>
    );
  }
);

export default BreadcrumbItemPrevious;
