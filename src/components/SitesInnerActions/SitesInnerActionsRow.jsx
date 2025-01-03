import { HiOutlineHome } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlineWrapText } from "react-icons/md";

export function SitesInnerActionsRow({ el }) {
  return (
    <div className="table-row">
      <div className="table-block tax-block" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block" style={{ width: "5%" }}>
        <img src={el.photo} alt="'N/A'" />
      </div>
      <div
        className="table-block name-block"
        style={{ width: "15%", paddingTop: "20px" }}
      >
        {el.name || "N/A"}
      </div>
      <div
        className="table-block site-block"
        style={{ width: "15%", backgroundColor: "#fff" }}
      >
        {el.site || "N/A"}
        <HiOutlineHome className="house-info" />
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
      <div
        className="table-block workedTime-block-WorkedTime"
        style={{ width: "15%" }}
      >
        <p>{el.workedTime.brutto || "N/A"}</p>
        <p>{el.workedTime.netto || "N/A"}</p>
      </div>
      <div
        className="table-block manager-block"
        style={{ width: "10%", paddingTop: "20px" }}
      >
        {el.manager || "N/A"}
      </div>
      <div className="table-block date-block" style={{ width: "20%" }}>
        {(
          <p>
            {el.date.time} {el.date.day}.{el.date.month}.{el.date.year}
          </p>
        ) || "N/A"}
        <div className="table-block-flex">
          <HiPencilAlt className="edit-block" />
          <MdOutlineWrapText className="recent-block" />
        </div>
      </div>
    </div>
  );
}
