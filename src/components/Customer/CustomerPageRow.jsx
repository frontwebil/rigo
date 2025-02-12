import { Link } from "react-router-dom"

export const CustomerPageRow = ({el}) => {
  return (
    <div className="table-row ">
      <div className="table-block id-block-site center" style={{ width: "5%" }}>
        {el.id || "N/A"}
      </div>
      <div className="table-block name-block-site" style={{ width: "15%" }}>
        {el.customerName || "N/A"}
      </div>
      <div className="table-block workers-block-site" style={{ width: "15%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.sites || "N/A"}
        </Link>
      </div>
      <div className="table-block workers-block-site" style={{ width: "15%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.workers || "N/A"}
        </Link>
      </div>
      <div className="table-block absent-block-site" style={{ width: "15%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.absent || "N/A"}
        </Link>
      </div>
      <div className="table-block present-block-site" style={{ width: "15%" }}>
        <Link to={`/sites/${el.id}`} state={{ currentTab: "Employees" }}>
          {el.present || "N/A"}
        </Link>
      </div>
      <div className="table-block alerts-block-site" style={{ width: "15%" }}>
        {el.alerts || "N/A"}
      </div>
      <div className="table-block info-block-site" style={{ width: "15%" }}>
        <Link to={`/sites/${el.id}`}>
          <img src="/icons/info-icon.png" alt="" className="info-button" />
        </Link>
      </div>
    </div>
  )
}
