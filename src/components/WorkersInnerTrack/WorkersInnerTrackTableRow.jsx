export function WorkersInnerTrackTableRow({ el }) {
  return (
    <div className="table-row">
      <div className="table-block  block-site-inner" style={{ width: "5%" }}>
        <img src={el.photo} alt="" />
      </div>
      <div
        className="table-block  block-site-inner-text"
        style={{ width: "20%" }}
      >
        {el.site}
      </div>
      <div
        className="table-block  block-site-inner-text"
        style={{ width: "20%" }}
      >
        {el.date.time} {el.date.day}.{el.date.month}.{el.date.year}
      </div>
      <div
        className="table-block  block-site-inner-text"
        style={{ width: "15%" }}
      >
        {el.resault}
      </div>
      <div className="table-block block-site-inner-" style={{ width: "20%" }}>
        {el.total && <div className="total">{el.total}</div>}
      </div>
      <div className="table-block site-location" style={{ width: "20%" }}>
        <div
          className={`location ${el.action.type == "Enter" ? "enter" : ""} ${
            el.action.type == "Exit" ? "exit" : ""
          } ${el.action.type == "Colleague" ? "colleague" : ""} ${
            el.action.type == "Brake" ? "brake" : ""
          }`}
        >
          {el.action.type}
        </div>
        <div
          className={`distance ${
            el.action.distance == "At Site" ? "atSite" : ""
          }`}
        >
          {el.action.distance}
        </div>
      </div>
    </div>
  );
}
