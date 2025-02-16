import { Link } from "react-router-dom";

export function InsuranceRow({ el, i, setOpenRowId, openRowId }) {
  const isOpen = openRowId === i;
  return (
    <div className="table-row" key={i}>
      <div className="table-block" style={{ width: "10%" }}>
        {el.passport}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        {el.companyName}
      </div>
      <div className="table-block" style={{ width: "12%" }}>
        {el.name}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        {el.member}
      </div>
      <div className="table-block" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        {el.phone}
      </div>
      <div className="table-block" style={{ width: "8%" }}>
        {el.country}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        <div className={`location ${el.status}`}>
        {el.status == "Empty" ? (
            <Link to="/add-insurance">{el.status}</Link>
          ) : (
            el.status
          )}
        </div>
      </div>
      <div className="table-block center" style={{ width: "5%" }}>
        {el.notes}
      </div>
      <div className="table-block center" style={{ width: "5%" }}>
        {el.alerts}
      </div>
      <div
        className="table-block center"
        style={{ width: "10%", position: "relative" }}
      >
        <button
          className="fast-action-btn"
          onClick={() => setOpenRowId(isOpen ? null : i)}
        >
          Fast Action
        </button>
        {isOpen && (
          <ul className="fast-actions-menu">
            <li className="fast-action-item">Cancel/Renew/Edit Insurance</li>
            <li className="fast-action-item">Open Quick Chat</li>
            <li className="fast-action-item">Tag</li>
            <li className="fast-action-item">Open Work Accident Form</li>
            <li className="fast-action-item">Documents</li>
            <li className="fast-action-item">Send Files BetLamed</li>
          </ul>
        )}
      </div>
      <Link
        to={`/insuranceCustomer/${el.tax}`}
        className="table-block center"
        style={{ width: "5%" }}
      >
        <img src="/icons/info-icon.png" alt="" className="info-button" />
      </Link>
    </div>
  );
}
