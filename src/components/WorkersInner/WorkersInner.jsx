import { useParams } from "react-router-dom";
import { UsersData } from "../../consts/UsersData";
import { useState } from "react";
import {WorkersInnerAlerts} from "../WorkersInnerAlerts/WorkersInnerAlerts";
import { PageNotFound } from "../InDeveloping/InDeveloping";
import { WorkersInnerTrack } from "../WorkersInnerTrack/WorkersInnerTrack";
import { WorkersInnerTime } from "../WorkersInnerTime/WorkersInnerTime";

export function WorkersInner({ currentPage }) {
  const { id } = useParams(); 

  const currentData = UsersData.find((user) =>
    user.sitesEmployees.some((employee) => employee.id === id)
  );
  const currentEmployee = currentData?.sitesEmployees.find((employee) => employee.id === id);
  
  const [activeTab, setActiveTab] = useState("Time");

  const tabs = [
    "Basic",
    "Alerts",
    "Actions",
    "Track",
    "History",
    "Time",
    "Insurance",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const updatedCurrentPage = [
    ...currentPage.names,
    currentData?.name,
    activeTab,
  ];

  const getTabContent = (tab) => {
    switch (tab) {
      case "Basic":
        return <PageNotFound/>;
      case "Alerts":
        return (
          <WorkersInnerAlerts
          data={currentEmployee.employeeAlert}
          currentPage={currentPage}
          handleTabClick={handleTabClick}
          tabs={tabs}
          activeTab={activeTab}
          updatedCurrentPage={updatedCurrentPage}/>
        );
      case "Actions":
        return <PageNotFound/>;
      case "Track":
        return <WorkersInnerTrack     
        data={currentEmployee.employeeTrack}      
        currentPage={currentPage}
        handleTabClick={handleTabClick}
        tabs={tabs}
        activeTab={activeTab}
        updatedCurrentPage={updatedCurrentPage}/>;
      case "History":
        return <PageNotFound/>;
      case "Time":
        return (
          <WorkersInnerTime 
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
