import FacultyAndStaffPartyContainer from "./FacultyAndStaffPartyContainer";
import "./CommunicationCenterForm.css";

const CommunicationCenterForm = () => {
  return (
    <div className="second-card1">
      <div className="background4">
        <div className="background-child1" />
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
        propTop="113px"
        propWidth="357px"
        propWidth1="356px"
        propWidth2="127px"
      />
      <b className="last-update-10">Last update: 10 Sep, 2023</b>
      <b className="communication-center">Communication Center</b>
    </div>
  );
};

export default CommunicationCenterForm;
