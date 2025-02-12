import { useState } from "react";

export const WorkersPageActions = () => {
  const [currentAction, setCurrentAction] = useState("Employees");

  return (
    <div className="info-page-container">
      <div className="flex-actions">
        <button
          onClick={() => setCurrentAction("Employees")}
          className={`${currentAction === "Employees" && "activeAction"}`}
        >
          Employees: 300
        </button>
        <button
          onClick={() => setCurrentAction("Insured")}
          className={`${currentAction === "Insured" && "activeAction"}`}
        >
          Insured: 250
        </button>
        <button
          onClick={() => setCurrentAction("Pending")}
          className={`${currentAction === "Pending" && "activeAction"}`}
        >
          Pending: 20
        </button>
        <button
          onClick={() => setCurrentAction("Canceled")}
          className={`${currentAction === "Canceled" && "activeAction"}`}
        >
          Canceled: 20
        </button>
        <button
          onClick={() => setCurrentAction("Without Insurance")}
          className={`${currentAction === "Without Insurance" && "activeAction"}`}
        >
          Without Insurance: 10
        </button>
        <button
          onClick={() => setCurrentAction("Updated")}
          className={`${currentAction === "Updated" && "activeAction"}`}
        >
          Updated: 7
        </button>
      </div>
    </div>
  );
};
