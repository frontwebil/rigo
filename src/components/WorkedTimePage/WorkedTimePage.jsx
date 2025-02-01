import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { UsersData } from "../../consts/UsersData";
import { WorkedTimeTableRow } from "./WorkedTimeTableRow";
import { useEffect, useState } from "react";

export function WorkedTimePage({ currentPage }) {
  const [workedTimeData, setWorkedData] = useState(UsersData);
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = ['site','name','customer','manager','days','brutto','netto'];

  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter(({ name, customer, site, manager, days }) => {
      return (
        name.toLowerCase().includes(cleanSearchText) ||
        customer.toLowerCase().includes(cleanSearchText) ||
        site.toLowerCase().includes(cleanSearchText) ||
        days.toLowerCase().includes(cleanSearchText) ||
        manager.toLowerCase().includes(cleanSearchText)
      );
    });
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      let filteredData = UsersData;
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }

      setWorkedData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <>
      <Search
        currentPage={currentPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SortFiltrButtons sortByButtons={sortByButtons} data={workedTimeData} setData={setWorkedData} defaultData={UsersData}/>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Tax
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "16%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "14%" }}>
              Site
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
              Customer
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
              Worked Time
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Days
            </div>
          </div>
          {workedTimeData.map((el, index) => {
            return <WorkedTimeTableRow key={index} el={el} />;
          })}
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>Total Hours:</div>
            <div className="table-block nav" style={{ width: "6%" }}></div>
            <div className="table-block nav" style={{ width: "15%" }}></div>
            <div className="table-block nav" style={{ width: "14%" }}></div>
            <div className="table-block nav" style={{ width: "10%" }}></div>
            <div className="table-block nav flex-bruttoNetto" style={{ width: "20%" }}>
              <p>Brutto</p>
              <p>Netto</p>
            </div>
            <div className="table-block nav" style={{ width: "15%" }}></div>
            <div className="table-block nav" style={{ width: "15%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
