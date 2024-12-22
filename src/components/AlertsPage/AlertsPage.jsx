import { EventsLog } from "../EventsLog/EventsLog";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { UsersData } from "../../consts/UsersData";
import { AlertsTableRow } from "./AlertsTableRow";
import { useEffect, useState } from "react";

export function AlertsPage({currentPage}) {
  const [AlertsData, setAlertsData] = useState(UsersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventLog , setEventLog] = useState([])
  const sortByButtons = ['name' , 'site' , 'manager' , 'date']


  const SearchInData = (searchText, list) => {
    if (!searchText) return list;

    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();

    return list.filter(({ name, phone, site, manager }) => {
      const cleanPhone = phone.replace(/-/g, "");

      return (
        name.toLowerCase().includes(cleanSearchText) ||
        cleanPhone.includes(cleanSearchText) ||
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
      let filteredData = UsersData;
  
      if (eventLog.length > 0) {
        filteredData = filteredData.filter(alert =>
          eventLog.includes(alert.location.type)
        );
      }
  
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }
  
      setAlertsData(filteredData);
    }, 100);
  
    return () => clearTimeout(debounce);
  }, [searchTerm , eventLog]);

    
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} currentPage={currentPage}/>
      
      <SortFiltrButtons sortByButtons={sortByButtons} data={AlertsData} setData={setAlertsData}/>

      <EventsLog eventLog={eventLog} setEventLog={setEventLog} eventHandleClick={eventHandleClick}/>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "13%" }}>
              Phone
            </div>
            <div className="table-block nav" style={{ width: "17%" }}>
              Site
            </div>
            <div className="table-block nav" style={{ width: "18%" }}>
              Location
            </div>
            <div className="table-block nav" style={{ width: "11%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "21%" }}>
              Date
            </div>
          </div>
          {AlertsData.map((el, index) => {
            return <AlertsTableRow el={el} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
