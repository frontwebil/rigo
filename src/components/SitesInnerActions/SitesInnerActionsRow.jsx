import { useState } from "react";
import { Link } from "react-router-dom";

export function SitesInnerActionsRow({ el }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedSite, setSelectedSite] = useState(el.site || "N/A");
  const options = [
    "Ovdim Netanya",
    "Motiv Rishon Le Zion",
    "Nisbor Ramat Beca",
  ];

  const handleSelect = (newSite) => {
    setSelectedSite(newSite);
    setShowMenu(false);
  };
  return (
    <div className="table-row">
      <div className="table-block tax-block" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block" style={{ width: "5%" }}>
        <img src={el.photo} alt="'N/A'" />
      </div>
      <div className="table-block name-inner" style={{ width: "15%" }}>
        <Link to={`/workers/${el.id}`}>{el.name}</Link>
      </div>
      <div
        className="table-block site-block"
        style={{
          width: "15%",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        {selectedSite || "N/A"}
        <img
          src="/icons/site.png"
          alt=""
          className="house-info"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        {showMenu && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                style={{ padding: "5px", cursor: "pointer" }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
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
      <div className="table-block manager-block" style={{ width: "10%" }}>
        {el.manager || "N/A"}
      </div>
      <div className="table-block date-block" style={{ width: "20%" }}>
        {(
          <p>
            {el.date.time} {el.date.day}.{el.date.month}.{el.date.year}
          </p>
        ) || "N/A"}
        <div className="table-block-flex">
          <img src="/icons/editDate.png" alt="" className="edit-block" />
          <img src="/icons/recentDate.png" alt="" className="recent-block" />
        </div>
      </div>
    </div>
  );
}
