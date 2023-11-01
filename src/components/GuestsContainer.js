import { memo } from "react";
import "./GuestsContainer.css";

const GuestsContainer = memo(({ eventDetails }) => {
  return (
    <div className="cashiers-users-table">
      <div className="cashiers-users-table-child" />
      <img className="cashiers-users-table-item" alt="" src="/line-6.svg" />
      <img className="cashiers-users-table-inner" alt="" src="/line-6.svg" />
      <img className="cashiers-users-table-child1" alt="" src="/line-6.svg" />
      <img className="cashiers-users-table-child2" alt="" src="/line-6.svg" />
      <div className="first-guest-user">
        <div className="guests-actions-button">
          <div className="admins-edit">
            <div className="admins-edit-child" />
            <div className="active">Edit</div>
          </div>
          <div className="admins-deactivate">
            <img
              className="admins-deactivate-child"
              alt=""
              src="/rectangle-351.svg"
            />
            <div className="deactivate">Deactivate</div>
          </div>
          <div className="admins-delete">
            <div className="admins-delete-child" />
            <div className="delete">Delete</div>
          </div>
        </div>
        <div className="guests-status">
          <div className="admin-active">
            <div className="admins-edit-child" />
            <div className="active">Active</div>
          </div>
        </div>
        <div className="guests-last-name">
          <div className="odinabekova"> Odinabekova</div>
        </div>
        <div className="guests-first-name">
          <div className="odinabekova">Diloro</div>
        </div>
        <div className="first">
          <div className="odinabekova">1</div>
        </div>
      </div>
      <img className="cashiers-users-table-child3" alt="" src="/line-1.svg" />
      <div className="titles4">
        <div className="actions2">ACTIONS</div>
        <div className="status">STATUS</div>
        <div className="last-name">FIRST NAME</div>
        <div className="first-name">FIRST NAME</div>
        <div className="numeration">#</div>
      </div>
      <div className="reception8">
        <div className="guests-total">
          <b className="total-1">Total: 1</b>
          <img
            className="ioniconccheckmarkccircle2"
            alt=""
            src="/ioniconccheckmarkccircle2.svg"
          />
        </div>
        <b className="guests3">{eventDetails}</b>
      </div>
    </div>
  );
});

export default GuestsContainer;
