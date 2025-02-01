import { Link } from "react-router-dom";

export function SitePageTableRow({ el }) {
  return (
    <div className="table-row ">
      <div className="table-block id-block-site center" style={{ width: "5%" }}>
        {el.id || "N/A"}
      </div>
      <div className="table-block name-block-site" style={{ width: "24%" }}>
        {el.nameObject || "N/A"}
      </div>
      <div className="table-block workers-block-site" style={{ width: "9%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.workers || "N/A"}
        </Link>
      </div>
      <div className="table-block absent-block-site" style={{ width: "8%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.absent || "N/A"}
        </Link>
      </div>
      <div className="table-block present-block-site" style={{ width: "8%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.present || "N/A"}
        </Link>
      </div>
      <div className="table-block manager-block-site" style={{ width: "15%" }}>
        {el.manager || "N/A"}
      </div>
      <div className="table-block location-block-site" style={{ width: "9%" }}>
        <img src="/icons/location.png" alt="" className="location-button" />
      </div>
      <div className="table-block radius-block-site" style={{ width: "8%" }}>
        {el.radius || "N/A"}
      </div>
      <div className="table-block alerts-block-site" style={{ width: "7%" }}>
        {el.alerts || "N/A"}
      </div>
      <div className="table-block info-block-site" style={{ width: "7%" }}>
        <Link to={`/sites/${el.id}`}>
          <img src="/icons/info-icon.png" alt="" className="info-button" />
        </Link>
      </div>
    </div>
  );
}
