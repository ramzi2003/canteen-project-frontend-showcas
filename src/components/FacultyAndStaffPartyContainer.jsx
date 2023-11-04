import { memo, useMemo } from "react";
import "./FacultyAndStaffPartyContainer.css";

const FacultyAndStaffPartyContainer = memo(
  ({
    eventDate,
    eventTimeRange,
    messageContent,
    eventName,
    propTop,
    propLeft,
    propWidth,
    propWidth1,
    propWidth2,
  }) => {
    const secondMessageStyle = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    const detailsStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const date20SeptemberContainerStyle = useMemo(() => {
      return {
        width: propWidth1,
      };
    }, [propWidth1]);

    const facultyAndStaffStyle = useMemo(() => {
      return {
        width: propWidth2,
      };
    }, [propWidth2]);

    return (
      <div className="second-message" style={secondMessageStyle}>
        <div className="background14">
          <div className="background-child15" />
        </div>
        <div className="details" style={detailsStyle}>
          <div
            className="date-20-september-container"
            style={date20SeptemberContainerStyle}
          >
            <p className="date-20-september">{eventDate}</p>
            <p className="date-20-september">{eventTimeRange}</p>
            <p className="date-20-september">{messageContent}</p>
          </div>
          <div className="faculty-and-staff" style={facultyAndStaffStyle}>
            {eventName}
          </div>
        </div>
      </div>
    );
  }
);

export default FacultyAndStaffPartyContainer;
