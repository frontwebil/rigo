import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";
import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
import { SitesInnerTimeRow } from "./SitesInnerTimeTableRow";

export default function SitesInnerTime({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {
  const [WorkedTimeData, setWorkedTimeData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = ['site','name','customer','manager','days','brutto','netto'];

  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter(({ name, customer, site, manager , days}) => {
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
      let filteredData = data;
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }
      setWorkedTimeData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
  }, [searchTerm , data]);

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
      <SitesInnerSortButtons sortByButtons={sortByButtons} data={WorkedTimeData} setData={setWorkedTimeData}/>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              TaxID
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "22%" }}>
              Name
            </div>
            {/* <div className="table-block nav" style={{ width: "15%" }}>
              Site
            </div> */}
            <div className="table-block nav" style={{ width: "15%" }}>
              Customer
            </div>
            <div className="table-block nav" style={{ width: "22%" }}>
              Worked Time
            </div>
            <div className="table-block nav" style={{ width: "14%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "17%" }}>
              Days
            </div>
          </div>
          {WorkedTimeData.map((el, index) => {
            return <SitesInnerTimeRow key={index} el={el} />;
          })}
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}></div>
            <div className="table-block nav" style={{ width: "5%" }}></div>
            <div className="table-block nav" style={{ width: "22%" }}></div>
            <div className="table-block nav" style={{ width: "15%" }}></div>
            <div
              className="table-block nav flex-bruttoNetto"
              style={{ width: "22%" }}
            >
              <p>Brutto</p>
              <p>Netto</p>
            </div>
            <div className="table-block nav" style={{ width: "14%" }}></div>
            <div className="table-block nav" style={{ width: "17%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
