import { Link } from "react-router-dom";

export function SitesInnerAlertsRow({ el }) {
  return (
    <div className="table-row ">
      <div className="table-block tax-block" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block block-site-inner" style={{ width: "5%" }}>
        <img src={el.photo} alt="" />
      </div>
      <div className="table-block name-inner" style={{ width: "13%" }}>
        <Link to={`/workers/${el.id}`}>{el.name}</Link>
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.customer}
      </div>
      <div className="table-block site-location" style={{ width: "15%" }}>
        <div
          className={`location ${el.location.type == "Enter" ? "enter" : ""} ${
            el.location.type == "Exit" ? "exit" : ""
          } ${el.location.type == "Colleague" ? "colleague" : ""} ${
            el.location.type == "Brake" ? "brake" : ""
          }`}
        >
          {el.location.type}
        </div>
        <div
          className={`distance ${
            el.location.distance == "At Site" ? "atSite" : ""
          }`}
        >
          {el.location.distance}
        </div>
      </div>
      <div className="table-block center" style={{ width: "15%" }}>
        {el.confirmTime.green && el.confirmTime.red ? (
          <div className="confirmTime">
            <p className="confirmTimeGreen">{el.confirmTime.green}</p>
            <p className="confirmTimeRed">{el.confirmTime.red}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="table-block block-site-inner" style={{ width: "9%" }}>
        {el.ResaultTime}
      </div>
      <div className="table-block block-site-inner" style={{ width: "10%" }}>
        {el.manager}
      </div>
      <div className="table-block " style={{ width: "20%" }}>
        <div className="alertNotification-flex">
          {el.alertNotification.map((el, i) => {
            return (
              <p key={i} className="alerts-block-notification">
                {el}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
