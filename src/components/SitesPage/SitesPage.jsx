import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { UsersData } from "../../consts/UsersData";
import { SitePageTableRow } from "./SitePageTableRow";

export function SitesPage({ currentPage }) {
  const [siteData, setSiteData] = useState(UsersData);
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = ['name','workers','absent','present','radius','alerts','id'];

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
      setSiteData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <>
      <Search currentPage={currentPage} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <SortFiltrButtons sortByButtons={sortByButtons} data={siteData} setData={setSiteData}/>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "10%" }}>
              ID
            </div>
            <div className="table-block nav" style={{ width: "19%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "9%" }}>
              Workers
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Absent
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Present
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "9%" }}>
              Location
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Radius
            </div>
            <div className="table-block nav" style={{ width: "7%" }}>
              Alerts
            </div>
            <div className="table-block nav" style={{ width: "7%" }}>
              Info
            </div>
          </div>
        </div>
        {siteData.map((el, index) => {
          return <SitePageTableRow el={el} key={index} id={index} />;
        })}
        <div className="table-row nav">
          <div className="table-block nav" style={{ width: "10%" }}></div>
          <div className="table-block nav" style={{ width: "19%" }}></div>
          <div className="table-block nav" style={{ width: "9%" }}>
            {(() => {
              let workers = siteData.reduce(
                (acc, el) => acc + (+el.workers || 0),
                0
              );
              return workers;
            })()}
          </div>
          <div className="table-block nav" style={{ width: "8%" }}>
            {(() => {
              let absent = siteData.reduce(
                (acc, el) => acc + (+el.absent || 0),
                0
              );
              return absent;
            })()}
          </div>
          <div className="table-block nav" style={{ width: "8%" }}>
          {(() => {
              let present = siteData.reduce(
                (acc, el) => acc + (+el.present || 0),
                0
              );
              return present;
            })()}
          </div>
          <div className="table-block nav" style={{ width: "15%" }}></div>
          <div className="table-block nav" style={{ width: "9%" }}></div>
          <div className="table-block nav" style={{ width: "8%" }}></div>
          <div className="table-block nav" style={{ width: "7%" }}></div>
          <div className="table-block nav" style={{ width: "7%" }}></div>
        </div>
      </div>
    </>
  );
}
