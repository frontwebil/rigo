import { BsGeoAltFill } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function SitesInnerEmployeesTableRow({el}) {
  return (
    <div className="table-row ">
      <div className="table-block block-site-inner" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block " style={{ width: "5%" }}>
        <img src={el.photo} alt="" />
      </div>
      <div className="table-block name-site-inner" style={{ width: "15%" }}>
        {el.name}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
      {el.passport}
      </div>
      <div className="table-block block-site-inner" style={{ width: "9%" }}>
      {el.phone}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.manager}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.customer}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.country}
      </div>
      <div className="table-block block-site-inner" style={{ width: "5%" }}>
        {el.app}
      </div>
      <div className="table-block" style={{ width: "10%" , display:'flex' , alignItems:'center' }}>
        <div className={`location ${el.insurance == 'Enter' ? 'enter' : ''} ${el.insurance == 'Canceled' ? 'canceled' : ''} ${el.insurance == 'Pending' ? 'pending' : ''} ${el.insurance == 'Empty' ? 'empty' : ''}`}>{el.insurance}</div>
      </div>
      <div className="table-block alertsButton-wrap" style={{ width: "5%" }}>
        {el.alerts && <FiAlertTriangle className="alertsButton"/>}
      </div>
      <div className="table-block tableFlex-block" style={{ width: "8%" }}>
        <BsGeoAltFill className="location-button" style={{color:'#0890ec'}}/>
        {el.realEstate}
      </div>
      <div className="table-block tableFlex-block" style={{ width: "6%" }}>
        <Link to={`/workers/${el.id}`}>
          <IoIosInformationCircle style={{color: "#2894f4"}} className="info-button"/>        
        </Link>
      </div>
    </div>
  );
}
