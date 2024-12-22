import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";
import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
import { WorkersInnerAlertsTableRow } from "./WorkersInnerAlertsTableRow";
import { WorkersInnerEventLog } from "./WorkersInnerEventLog";

export function WorkersInnerAlerts({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {
  const [workerData, setWorkerData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventLog , setEventLog] = useState([])
  const sortByButtons = ["site" , "manager" , "date"];

  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter(({ site , manager  }) => {
      return (
        site.toLowerCase().includes(cleanSearchText) ||
        manager.toLowerCase().includes(cleanSearchText) 
      );
    });
  };

  const eventHandleClick = (event) => {
    if(event === 'All'){
      setEventLog([])
    }
    setEventLog((prevLog) => {
      if (prevLog.includes(event)) {
        return prevLog.filter((item) => item !== event);
      } else {
        return [...prevLog, event];
      }
    });
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      let filteredData = data;
  
      if (eventLog.length > 0) {
        filteredData = filteredData.filter(alert =>
          eventLog.includes(alert.insurance)||
          eventLog.includes(alert.action.type)
        );
      }
  
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }
  
      setWorkerData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
  }, [searchTerm, data , eventLog]);

  return (
    <div>
      <Search
        currentPage={{ linkTo: currentPage.linkTo, names: updatedCurrentPage }}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <SitesInnerNav
        handleTabClick={handleTabClick}
        tabs={tabs}
        activeTab={activeTab}
      />
      <SitesInnerSortButtons
        sortByButtons={sortByButtons}
        data={workerData}
        setData={setWorkerData}
      />
      <WorkersInnerEventLog eventLog={eventLog} setEventLog={setEventLog} eventHandleClick={eventHandleClick}/>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
            Site
            </div>
            <div className="table-block nav" style={{ width: "12%" }}>
            Schedule
            </div>
            <div className="table-block nav" style={{ width: "17%" }}>
              Action
            </div>
            <div className="table-block nav" style={{ width: "11%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Insurance
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Chat
            </div>

            <div className="table-block nav" style={{ width: "20%" }}>
            Date
            </div>
          </div>
          {workerData.map((el, index) => {
                  return <WorkersInnerAlertsTableRow key={index} el={el} />;
                })}
        </div>
      </div>
    </div>
  );
}
