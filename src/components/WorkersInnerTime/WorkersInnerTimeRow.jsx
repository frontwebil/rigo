export function WorkersInnerTimeRow({ el }) {
  return (
    <div
      className={`table-row ${el.day === "Saturday" && "shabat"} ${
        el.holiday && "holiday"
      } ${el.totalTime > 8 && "alert"}`}
    >
      <div className="table-block" style={{ width: "10%" }}>
        {el.day}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        {el.startTime || "None"}
      </div>
      <div className="table-block" style={{ width: "10%" }}>
        {el.endTime || "None"}
      </div>
      <div className="table-block persents" style={{ width: "8%" }}>
        {el["100"]}
      </div>
      <div className="table-block persents" style={{ width: "8%" }}>
        {el["125"]}
      </div>
      <div className="table-block persents" style={{ width: "8%" }}>
        {el["150"]}
      </div>
      <div className="table-block persents" style={{ width: "8%" }}>
        {el["175"]}
      </div>
      <div className="table-block persents" style={{ width: "8%" }}>
        {el["200"]}
      </div>
      <div className="table-block persents" style={{ width: "10%" }}>
        {el.totalTime}
      </div>
      <div className="table-block" style={{ width: "20%" }}>
        {(
          <p>
            {el.date.time} {el.date.day}.{el.date.month}.{el.date.year}
          </p>
        ) || "N/A"}
      </div>
    </div>
  );
}
