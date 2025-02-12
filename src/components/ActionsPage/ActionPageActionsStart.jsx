import { useState } from "react";

export const ActionPageActionsStart = () => {
  const [currentAction, setCurrentAction] = useState("All");

  return (
    <div className="info-page-container">
      <div className="flex-actions">
        <button
          onClick={() => setCurrentAction("All")}
          className={`${currentAction === "All" && "activeAction"}`}
        >
          All : 36
        </button>
        <button
          onClick={() => setCurrentAction("At work")}
          className={`${currentAction === "At work" && "activeAction"}`}
        >
          At work: 30
        </button>
        <button
          onClick={() => setCurrentAction("At Site")}
          className={`${currentAction === "At Site" && "activeAction"}`}
        >
          At Site: 28
        </button>
        <button
          onClick={() => setCurrentAction("Out of Site")}
          className={`${currentAction === "Out of Site" && "activeAction"}`}
        >
          Out of Site: 2
        </button>
        <button
          onClick={() => setCurrentAction("Absent")}
          className={`${currentAction === "Absent" && "activeAction"}`}
        >
          Absent: 4
        </button>
        <button
          onClick={() => setCurrentAction("At other site")}
          className={`${currentAction === "At other site" && "activeAction"}`}
        >
          At other site: 1
        </button>
      </div>
    </div>
  );
};

