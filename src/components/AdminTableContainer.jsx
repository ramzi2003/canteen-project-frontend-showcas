import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminTableContainer.css";

const AdminTableContainer = memo(() => {
  const navigate = useNavigate();

  const onReceptionButtonContainerClick = useCallback(() => {
    navigate("/admin-page-reception");
  }, [navigate]);

  const onGuestsButtonContainerClick = useCallback(() => {
    navigate("/admin-page-guests");
  }, [navigate]);

  const onEditText2Click = useCallback(() => {
    navigate("/admin-page-bookers");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/admin-page-cashiers");
  }, [navigate]);

  const onAdminsButtonContainerClick = useCallback(() => {
    navigate("/admin-page-admins");
  }, [navigate]);

  return (
    <div className="admin-table">
      <div className="background21">
        <div className="background-child24" />
      </div>
      <img className="admin-table-child" alt="" src="/line-6.svg" />
      <div className="reception10">
        <div
          className="reception-button"
          onClick={onReceptionButtonContainerClick}
        >
          <div className="reception-button-child" />
          <div className="edit26">Edit</div>
        </div>
        <div className="reception-total-balance">
          <b className="b21">12412</b>
        </div>
        <div className="reception-total">
          <b className="b22">1</b>
        </div>
        <div className="reception-title">
          <div className="reception11">Reception</div>
        </div>
        <div className="fifth">
          <div className="div38">5</div>
        </div>
      </div>
      <img className="admin-table-item" alt="" src="/line-5.svg" />
      <div className="guests4">
        <div className="admins-button" onClick={onGuestsButtonContainerClick}>
          <div className="reception-button-child" />
          <div className="edit26">Edit</div>
        </div>
        <div className="guests-total-balance">
          <b className="b21">32145</b>
        </div>
        <div className="guests-total1">
          <b className="b24">20</b>
        </div>
        <div className="guests-title">
          <div className="guests5">Guests</div>
        </div>
        <div className="fourth2">
          <div className="div39">4</div>
        </div>
      </div>
      <img className="admin-table-inner" alt="" src="/line-3.svg" />
      <div className="bookers3">
        <div className="bookers-button">
          <div className="reception-button-child" />
          <div className="edit28" onClick={onEditText2Click}>
            Edit
          </div>
        </div>
        <div className="bookers-total-balance">
          <b className="b25">1243</b>
        </div>
        <div className="bookers-total">
          <b className="b24">15</b>
        </div>
        <div className="bookers-title">
          <div className="bookers4">Bookers</div>
        </div>
        <div className="third2">
          <div className="div38">3</div>
        </div>
      </div>
      <img className="admin-table-child1" alt="" src="/line-31.svg" />
      <div className="cashiers3">
        <div className="cashiers-button">
          <div className="cashiers-button-child" onClick={onRectangle4Click} />
          <div className="edit29">Edit</div>
        </div>
        <div className="cashiers-total-balance">
          <b className="b21">20000</b>
        </div>
        <div className="cashiers-total1">
          <b className="b22">2</b>
        </div>
        <div className="cashiers-title">
          <div className="cashiers4">Cashiers</div>
        </div>
        <div className="second3">
          <div className="div38">2</div>
        </div>
      </div>
      <img className="admin-table-child2" alt="" src="/line-2.svg" />
      <div className="admins">
        <div className="admins-button" onClick={onAdminsButtonContainerClick}>
          <div className="reception-button-child" />
          <div className="edit26">Edit</div>
        </div>
        <div className="admins-total-balance">
          <b className="b25">1200</b>
        </div>
        <div className="admins-total">
          <b className="b30">5</b>
        </div>
        <div className="admins-title">
          <div className="admins1">Admins</div>
        </div>
        <div className="third2">
          <div className="div38">1</div>
        </div>
      </div>
      <img className="admin-table-child3" alt="" src="/line-11.svg" />
      <div className="admin-titles">
        <div className="actions6">ACTIONS</div>
        <div className="total-balance1">TOTAL BALANCE</div>
        <div className="total3">TOTAL</div>
        <div className="categories">CATEGORIES</div>
        <div className="div43">#</div>
      </div>
      <div className="admin9">
        <b className="total-15">Total: 15</b>
        <img
          className="ioniconccheckmarkccircle6"
          alt=""
          src="/ioniconccheckmarkccircle4.svg"
        />
        <b className="admins2">Admins</b>
      </div>
    </div>
  );
});

export default AdminTableContainer;
