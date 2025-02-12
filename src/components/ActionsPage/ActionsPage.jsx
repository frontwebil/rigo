import { UsersData } from "../../consts/UsersData";
import { useEffect, useState } from "react";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { Search } from "../Search/Search";
import { AlertsTableRow } from "../AlertsPage/AlertsTableRow";
import { ActionPageActionsStart } from "./ActionPageActionsStart";

export function ActionPage({ currentPage }) {
  const [AlertsData, setAlertsData] = useState(UsersData);
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = ["name", "site", "date"];

  const searchKeys =
    UsersData.length > 0 && typeof UsersData[0] === "object"
      ? Object.keys(UsersData[0])
      : [];
  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter((item) => {
      return searchKeys.some((key) => {
        const value = String(item[key]).toLowerCase();
        return value.includes(cleanSearchText);
      });
    });
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      let filteredData = UsersData;

      // if (eventLog.length > 0) {
      //   filteredData = filteredData.filter(alert =>
      //     eventLog.includes(alert.location.type)
      //   );
      // }

      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }

      setAlertsData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
      />

      <SortFiltrButtons
        sortByButtons={sortByButtons}
        data={AlertsData}
        setData={setAlertsData}
        defaultData={UsersData}
      />

      <ActionPageActionsStart />

      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              TaxID
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
              Phone
            </div>
            <div className="table-block nav" style={{ width: "18%" }}>
              Site
            </div>
            <div className="table-block nav" style={{ width: "18%" }}>
              Location
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "21%" }}>
              Date
            </div>
          </div>
          {AlertsData.map((el, index) => {
            return <AlertsTableRow el={el} key={index} />;
          })}
          {AlertsData.map((el, index) => {
            return <AlertsTableRow el={el} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
