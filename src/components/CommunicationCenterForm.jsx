import { memo } from "react";
import FacultyAndStaffPartyContainer from "./FacultyAndStaffPartyContainer";
import "./CommunicationCenterForm.css";

const CommunicationCenterForm = memo(() => {
  return (
    <div className="second-card1">
      <div className="background15">
        <div className="background-child16" />
      </div>
      <FacultyAndStaffPartyContainer
        eventDate="Date: 20 September, 2023"
        eventTimeRange="Time: 18:00 - 20:00"
        messageContent="Message: Dear students, please find your food in a containers put on the first refrigerator "
        eventName="Faculty and Staff Party"
      />
      <FacultyAndStaffPartyContainer
        eventDate="Date: 5 September, 2023"
        eventTimeRange="Time: 15:00 - 16:00"
        messageContent="Message: Due to Independence day canteen will not be working"
        eventName="Independence day"
        propTop="7.06em"
        propLeft="1.31em"
        propWidth="22.31em"
        propWidth1="29.67em"
        propWidth2="9.07em"
      />
      <b className="last-update-10">Last update: 10 Sep, 2023</b>
      <b className="communication-center">Communication Center</b>
    </div>
  );
});

export default CommunicationCenterForm;
