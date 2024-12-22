import { useEffect, useState } from "react";
import { SitesInnerEmployeesTableRow } from "../SitesInnerEmployees/SitesInnerEmployeesTableRow";
import { UsersData } from "../../consts/UsersData";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { WorkerEventLog } from "../WorkerEventLog/WorkerEventLog";

export function WorkersPage({
  currentPage
}) {

    const [data] = useState(() => {
      return UsersData.map((el) => el.sitesEmployees).flat();
    });
    const [allWorkersData, setAllWorkersData] = useState(data);
    const [eventLog , setEventLog] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const sortByButtons = ['name' , 'realEstate' , 'insurance' , 'country' , 'customer' ,'manager' , 'passport' , 'tax' , 'phone'];
  
    const SearchInData = (searchText, list) => {
      if (!searchText) return list;
      const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
      return list.filter(({ name, customer , manager , realEstate , country , passport , tax , phone}) => {
        return (
          name.toLowerCase().includes(cleanSearchText) ||
          customer.toLowerCase().includes(cleanSearchText) ||
          realEstate.toLowerCase().includes(cleanSearchText) ||
          country.toLowerCase().includes(cleanSearchText) ||
          passport.toLowerCase().includes(cleanSearchText) ||
          tax.toLowerCase().includes(cleanSearchText) ||
          phone.toLowerCase().includes(cleanSearchText) ||
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
        if (searchTerm) {
          filteredData = SearchInData(searchTerm, filteredData);
        }

        if (eventLog.length > 0) {
          filteredData = filteredData.filter(alert =>
            eventLog.includes(alert.insurance)
          );
        }

        setAllWorkersData(filteredData);
      }, 100);
  
      return () => clearTimeout(debounce);
    }, [searchTerm , data , eventLog]);
  return (
    <div>
      <Search
        currentPage={currentPage}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <SortFiltrButtons sortByButtons={sortByButtons} data={allWorkersData} setData={setAllWorkersData}/>
      <WorkerEventLog eventLog={eventLog} setEventLog={setEventLog} eventHandleClick={eventHandleClick}/>
    
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "6%" }}>
            Tax
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
            Passport
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
            Phone
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
            Manager
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
            Customer
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
            Country
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
            APP
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
            Insurance
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
            Alerts
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
            Real Estate
            </div>
            <div className="table-block nav" style={{ width: "6%" }}>
            Info
            </div>
          </div>
          {allWorkersData.map((el, index) => {
            return <SitesInnerEmployeesTableRow key={index} el={el} i={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

