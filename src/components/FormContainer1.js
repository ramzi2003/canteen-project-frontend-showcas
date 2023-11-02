import { memo } from "react";
import "./FormContainer1.css";
import { Link } from "react-router-dom";

const FormContainer1 = memo(() => {
  return (
    <div className="table">
      <div className="table-child" />
      <div className="clients-table">
        <div className="students-2021-2025">
          <div className="student-button">
            <div className="edit10">Edit</div>
          </div>
          <b className="b10">12412</b>
          <b className="b11">120</b>
          <div className="students-2021-">Students 2021 - 2025</div>
          <div className="students-2021-2025-icon">
            <img className="vector-icon1" alt="" src="/vector.svg" />
            <div className="stud">Stud</div>
          </div>
        </div>
        {/* <img className="clients-table-child" alt="" src="/vector-5.svg" /> */}
        <hr className="clients-table-child"></hr>
        <div className="guests1">
          <div className="guests-button">
            <div className="edit10">Edit</div>
          </div>
          <b className="b12">32145</b>
          <b className="b13">20</b>
          <div className="guests2">Guests</div>
          <div className="guests-icon">
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <div className="stud">Adm</div>
          </div>
        </div>
        {/* <img className="clients-table-item" alt="" src="/vector-5.svg" /> */}
        <hr className="clients-table-item"></hr>
        <div className="faculty">
          <div className="guests-button">
            <div className="edit10">Edit</div>
          </div>
          <b className="b14">1243</b>
          <b className="b15">15</b>
          <div className="guests2">Faculty</div>
          <div className="guests-icon">
            <img className="vector-icon1" alt="" src="/vector2.svg" />
            <div className="stud">Facu</div>
          </div>
        </div>
        {/* <img className="clients-table-inner" alt="" src="/vector-5.svg" /> */}
        <hr className="clients-table-inner"></hr>
        <div className="students">
          <div className="student-button">
            <div className="edit10">Edit</div>
          </div>
          <b className="b16">20000</b>
          <b className="b15">200</b>
          <div className="students-text">Students</div>
          <div className="students-icon">
            <img className="vector-icon1" alt="" src="/vector.svg" />
            <div className="stud">Stud</div>
          </div>
        </div>
        {/* <img className="clients-table-child1" alt="" src="/vector-5.svg" /> */}
        <hr className="clients-table-child1"></hr>
        <div className="contractors2">
          <b className="b16">1200</b>
          <b className="b19">5</b>
          <div className="contractors3">Contractors</div>
          <div className="contractors-icon">
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <div className="adm1">Adm</div>
          </div>
          <div className="contractor-button">
            <div className="edit10">Edit</div>
          </div>
        </div>
        {/* <img className="clients-table-child2" alt="" src="/vector-5.svg" /> */}
        <hr className="clients-table-child2"></hr>
        <div className="clients-page-table-titles">
          <div className="actions1">ACTIONS</div>
          <div className="total-balance">TOTAL BALANCE</div>
          <div className="total2">TOTAL</div>
          <div className="departments">DEPARTMENTS</div>
        </div>
      </div>
      <div className="clients-page-text">
        <b className="total-9001">Total: 900</b>
        <img
          className="ioniconccheckmarkccircle1"
          alt=""
          src="/ioniconccheckmarkccircle1.svg"
        />
        <b className="clients7">Clients</b>
      </div>
      <div className="clients-page-button">
        <div className="add-department-button">
          {/* <div className="add-department-button-child" /> */}
          {/* <div className="add-department">{`Add department `}</div> */}
          <Link to="/add-client-clients-page" className="add-department-button-child">
            <div className="add-department">{`Add department `}</div>
          </Link>
        </div>
        <div className="change-department-button">
          {/* <div className="change-department">Change department</div> */}
          <Link to="/change-department-clients-page" className="change-department">
            Change department
          </Link>
        </div>
        <div className="add-department-button">
          <div className="clients-export-child" />
          <div className="clients-export1">Clients export</div>
        </div>
      </div>
    </div>
  );
});

export default FormContainer1;
