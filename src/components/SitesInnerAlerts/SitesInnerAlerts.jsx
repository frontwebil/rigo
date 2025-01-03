import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";
import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
import { SitesInnerAlertsRow } from "./SitesInnerAlertsRow";

export function SitesInnerAlerts({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {

  const [actionsData, setActionsData] = useState(data);
  console.log(actionsData)
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = ["name", "tax", "customer", "manager"];

  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter(({ name, customer, manager, tax }) => {
      return (
        name.toLowerCase().includes(cleanSearchText) ||
        customer.toLowerCase().includes(cleanSearchText) ||
        tax.toLowerCase().includes(cleanSearchText) ||
        manager.toLowerCase().includes(cleanSearchText)
      );
    });
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      let filteredData = data;
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }
      setActionsData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
  }, [searchTerm, data]);
  return (
    <>
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
        data={actionsData}
        setData={setActionsData}
      />
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              TaxID
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "13%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Customer
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Action \ Location
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Confirm Time
            </div>
            <div className="table-block nav" style={{ width: "9%" }}>
              Result Time
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
              Alert Notification
            </div>
          </div>
          {actionsData.map((el, i) => {
            return <SitesInnerAlertsRow key={i} el={el} />;
          })}
        </div>
      </div>
    </>
  );
}
