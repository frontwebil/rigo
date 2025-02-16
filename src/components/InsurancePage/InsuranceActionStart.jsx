import { useState } from "react";
import { Link } from "react-router-dom";

const InsuranceActionStart = () => {
  const [currentAction, setCurrentAction] = useState("All");

  return (
    <div className="info-page-container" style={{display:'flex' , justifyContent:'space-between' , gap:'10px'}}>
      <div className="flex-actions">
        <button
          onClick={() => setCurrentAction("All")}
          className={`${currentAction === "All" && "activeAction"}`}
        >
          All
        </button>
        <button
          onClick={() => setCurrentAction("Workers")}
          className={`${currentAction === "Workers" && "activeAction"}`}
        >
          Workers: 408
        </button>
        <button
          onClick={() => setCurrentAction("Insurance")}
          className={`${currentAction === "Insurance" && "activeAction"}`}
        >
          Insurance: 400
        </button>
        <button
          onClick={() => setCurrentAction("Active")}
          className={`${currentAction === "Active" && "activeAction"}`}
        >
          Active: 370
        </button>
        <button
          onClick={() => setCurrentAction("Expired")}
          className={`${currentAction === "Expired" && "activeAction"}`}
        >
          Expired: 25
        </button>
        <button
          onClick={() => setCurrentAction("Cancelled")}
          className={`${currentAction === "Cancelled" && "activeAction"}`}
        >
          Cancelled: 5
        </button>
        <button
          onClick={() => setCurrentAction("Climes")}
          className={`${currentAction === "Climes" && "activeAction"}`}
        >
          Climes
        </button>
        <button
          onClick={() => setCurrentAction("Alerts")}
          className={`${currentAction === "Alerts" && "activeAction"}`}
        >
          Alerts
        </button>
        <button
          onClick={() => setCurrentAction("Updates")}
          className={`${currentAction === "Updates" && "activeAction"}`}
        >
          Updates
        </button>
        <button
          onClick={() => setCurrentAction("By date range")}
          className={`${currentAction === "By date range" && "activeAction"}`}
        >By date range
        </button>
        <button
          onClick={() => setCurrentAction("By type")}
          className={`${currentAction === "By type" && "activeAction"}`}
        >
          By type
        </button>
      </div>
      <div className="sortFiltrButtons-flexButtons">
            <Link
              to="/add-insurance"
              className={`sortFiltrButtons-button active`}
              style={{border:'none'}}
            >
              Add Insurance
            </Link>
          </div>
    </div>
  );
};

export default InsuranceActionStart;
