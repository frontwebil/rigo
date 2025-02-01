export function WorkersInnerAlertsTableRow({ el }) {
  return (
    <div className="table-row">
      <div className="table-block " style={{ width: "5%" }}>
        <img src={el.photo} alt="" />
      </div>
      <div className="table-block name-site-inner" style={{ width: "15%" }}>
        {el.site}
      </div>
      <div className="table-block block-site-inner" style={{ width: "12%" }}>
        {el.schedule}
      </div>
      <div className="table-block site-location" style={{ width: "17%" }}>
        <div
          className={`location ${el.action.type == "Enter" ? "enter" : ""} ${
            el.action.type == "Exit" ? "exit" : ""
          } ${el.action.type == "Colleague" ? "colleague" : ""}`}
        >
          {el.action.type}
        </div>
        <div className="distance">{el.action.distance}</div>
      </div>
      <div className="table-block block-site-inner" style={{ width: "11%" }}>
        {el.manager}
      </div>
      <div className="table-block block-site-inner" style={{ width: "15%" }}>
        <p
          className={`insurance ${
            el.insurance === "On Confirmation" ? "onConfirm" : ""
          } ${el.insurance === "Confirmed" ? "confirmed" : ""}`}
        >
          {el.insurance}
        </p>
      </div>
      <div className="table-block block-site-inner" style={{ width: "5%" }}>
        {el.chat && (
          <img
            src="/icons/chat.png"
            style={{ width: "25px", cursor: "pointer" }}
          />
        )}
      </div>
      <div className="table-block date-block" style={{ width: "20%" }}>
        {`${el.date.day}.${el.date.month}.${el.date.year}`}
        <img src="/icons/editDate.png" alt="" className="edit-block" />
      </div>
    </div>
  );
}
