import { Link } from "react-router-dom";
export function SitesInnerTimeRow({ el }) {
  return (
    <div className="table-row">
      <div className="table-block tax-block" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block photo-block" style={{ width: "5%" }}>
        <img src={el.photo} alt="" />
      </div>
      <div className="table-block name-inner" style={{ width: "22%" }}>
        <Link to={`/workers/${el.id}`}>{el.name}</Link>
      </div>

      <div
        className="table-block customer-block-workedTime"
        style={{ width: "15%" }}
      >
        {el.customer || "N/A"}
      </div>
      <div
        className="table-block workedTime-block-WorkedTime"
        style={{ width: "22%" }}
      >
        <p>{el.workedTime.brutto || "N/A"}</p>
        <p>{el.workedTime.netto || "N/A"}</p>
      </div>
      <div
        className="table-block manager-block-workedTime"
        style={{ width: "14%" }}
      >
        {el.manager || "N/A"}
      </div>
      <div className="table-block days-block" style={{ width: "17%" }}>
        {el.days || "N/A"}
        <img src="/icons/info-icon.png" alt="" className="info-button" />
      </div>
    </div>
  );
}
