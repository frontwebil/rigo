import { Link } from "react-router-dom";

export function InsuranceRow({ el, i }) {
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
        <div
          className={`location ${el.status}`}
        >
          {el.status}
        </div>
      </div>
      <div className="table-block center" style={{ width: "5%" }}>
        {el.notes}
      </div>
      <div className="table-block center" style={{ width: "5%" }}>
        {el.alerts}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        {el.agent}
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
