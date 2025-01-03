import { BsGeoAltFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";


export function SitePageTableRow({ el }) {
  return (
    <div className="table-row ">
      <div className="table-block id-block-site" style={{ width: "10%" }}>
        {el.id || 'N/A'}
      </div>
      <div className="table-block name-block-site" style={{ width: "19%" }}>
        {el.nameObject || 'N/A'}
      </div>
      <div className="table-block workers-block-site" style={{ width: "9%" }}>
        {el.workers || "N/A"}
      </div>
      <div className="table-block absent-block-site" style={{ width: "8%" }}>
        {el.absent || 'N/A'}
      </div>
      <div className="table-block present-block-site" style={{ width: "8%" }}>
        {el.present || 'N/A'}
      </div>
      <div className="table-block manager-block-site" style={{ width: "15%" }}>
        {el.manager || 'N/A'}
      </div>
      <div className="table-block location-block-site" style={{ width: "9%" }}>
        <BsGeoAltFill className="location-button" style={{color:'#0890ec'}}/>
      </div>
      <div className="table-block radius-block-site" style={{ width: "8%" }}>
        {el.radius || 'N/A'}
      </div>
      <div className="table-block alerts-block-site" style={{ width: "7%" }}>
        {el.alerts || 'N/A'}
      </div>
      <div className="table-block info-block-site" style={{ width: "7%" }}>
        <Link to={`/sites/${el.id}`}>
        <IoIosInformationCircle style={{color: "#2894f4"}} className="info-button"/>
        </Link>
      </div>
    </div>
  );
}
