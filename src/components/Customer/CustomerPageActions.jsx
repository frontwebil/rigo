import { useState } from "react";

export const CustomerPageActions = () => {
    const [currentAction, setCurrentAction] = useState("All");
  
  return (
    <div className="info-page-container">
      <div className="flex-actions">
        <button
          onClick={() => setCurrentAction("All")}
          className={`${currentAction === "All" && "activeAction"}`}
        >
          All (Workers): 382
        </button>
        <button
          onClick={() => setCurrentAction("Absent")}
          className={`${currentAction === "Absent" && "activeAction"}`}
        >
          Absent: 70
        </button>
        <button
          onClick={() => setCurrentAction("Present")}
          className={`${currentAction === "Present" && "activeAction"}`}
        >
          Present: 302
        </button>
        <button
          onClick={() => setCurrentAction("Out of Site")}
          className={`${currentAction === "Out of Site" && "activeAction"}`}
        >
          Out of Site: 10
        </button>
        <button
          onClick={() => setCurrentAction("Active Sites")}
          className={`${currentAction === "Active Sites" && "activeAction"}`}
        >
          Active Sites: 4
        </button>
        <button
          onClick={() => setCurrentAction("Frozen Site")}
          className={`${currentAction === "Frozen Site" && "activeAction"}`}
        >
          Frozen Site: 1
        </button>
        <button
          onClick={() => setCurrentAction("Allerts")}
          className={`${currentAction === "Allerts" && "activeAction"}`}
        >
          Allerts: 27
        </button>
        <button
          onClick={() => setCurrentAction("Customers")}
          className={`${currentAction === "Customers" && "activeAction"}`}
        >
          Sites
        </button>
        <button
          onClick={() => setCurrentAction("Map")}
          className={`${currentAction === "Map" && "activeAction"}`}
        >
          Map
        </button>
      </div>
    </div>
  )
}
