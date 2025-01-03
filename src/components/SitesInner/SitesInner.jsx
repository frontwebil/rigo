import { useParams } from "react-router-dom";
import { UsersData } from "../../consts/UsersData";
import { sitesData } from "../../consts/sitesData";
import { useState } from "react";
import SitesInnerBasic from "../SitesInnerBasic/SitesInnerBasic";
import SitesInnerTime from "../SitesInnerTime/SitesInnerTime";
import { SitesInnerActions } from "../SitesInnerActions/SitesInnerActions";
import { SitesInnerEmployees } from "../SitesInnerEmployees/SitesInnerEmployees";
import { SitesInnerAlerts } from "../SitesInnerAlerts/SitesInnerAlerts";

export function SitesInner({ currentPage }) {
  const { id } = useParams();
  const currentData = sitesData.find((item) => item.id === id);
  const currentEmployees = UsersData.find((item) => item.id === id);
  const currentDataBasic = currentData?.sitesBasic;
  const currentDataTime = currentData?.sitesWorkedTime;
  const currentActionsData = currentData?.sitesActions;
  const currentAlertData = currentData.sitesAlerts;
  const currentEmployeesData = currentEmployees?.sitesEmployees;

  const [activeTab, setActiveTab] = useState("Basic");

  const tabs = [
    "Basic",
    "Alerts",
    "Actions",
    "Employees",
    "Licensed",
    "Worked Time",
    "Insures",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const updatedCurrentPage = [
    ...currentPage.names,
    currentData?.nameObject,
    activeTab,
  ];

  const getTabContent = (tab) => {
    switch (tab) {
      case "Basic":
        return (
          <SitesInnerBasic
            data={currentDataBasic}
            currentPage={currentPage}
            handleTabClick={handleTabClick}
            tabs={tabs}
            activeTab={activeTab}
            updatedCurrentPage={updatedCurrentPage}
          />
        );
      case "Alerts":
        return (
          <SitesInnerAlerts
            data={currentAlertData}
            currentPage={currentPage}
            handleTabClick={handleTabClick}
            tabs={tabs}
            activeTab={activeTab}
            updatedCurrentPage={updatedCurrentPage}
          />
        );
      case "Actions":
        return (
          <SitesInnerActions
            data={currentActionsData}
            currentPage={currentPage}
            handleTabClick={handleTabClick}
            tabs={tabs}
            activeTab={activeTab}
            updatedCurrentPage={updatedCurrentPage}
          />
        );
      case "Employees":
        return (
          <SitesInnerEmployees
            data={currentEmployeesData}
            currentPage={currentPage}
            handleTabClick={handleTabClick}
            tabs={tabs}
            activeTab={activeTab}
            updatedCurrentPage={updatedCurrentPage}
          />
        );
      case "Licensed":
        return <p>Licenses content is displayed here.</p>;
      case "Worked Time":
        return (
          <SitesInnerTime
            data={currentDataTime}
            currentPage={currentPage}
            handleTabClick={handleTabClick}
            tabs={tabs}
            activeTab={activeTab}
            updatedCurrentPage={updatedCurrentPage}
          />
        );
      case "Insures":
        return <p>Insurance details are displayed here.</p>;
      default:
        return <p>No content available for this tab.</p>;
    }
  };

  return (
    <>
      <div className="SitesInnerNav-content">{getTabContent(activeTab)}</div>
    </>
  );
}
