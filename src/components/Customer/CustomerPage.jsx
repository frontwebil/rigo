import { useEffect, useState } from "react";
import { UsersData } from "../../consts/UsersData";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { CustomerPageActions } from "./CustomerPageActions";
import { CustomerPageRow } from "./CustomerPageRow";

export function CustomerPage({ currentPage }) {
  const [siteData, setSiteData] = useState(UsersData);
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = ['workers','absent','present','radius','alerts'];

  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter(({ nameObject, customer, site, manager, days }) => {
      return (
        nameObject.toLowerCase().includes(cleanSearchText) ||
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
      <SortFiltrButtons sortByButtons={sortByButtons} data={siteData} setData={setSiteData} defaultData={UsersData}/>
      <CustomerPageActions/>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              ID
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Sites
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Workers
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Absent
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Present
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Alerts
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Info
            </div>
          </div>
        </div>
        {siteData.map((el, index) => {
          return <CustomerPageRow el={el} key={index} id={index} />;
        })}

        <div className="table-row nav">
          <div className="table-block nav" style={{ width: "5%" }}></div>
          <div className="table-block nav" style={{ width: "15%" }}></div>
          <div className="table-block nav" style={{ width: "15%" }}></div>
          <div className="table-block nav" style={{ width: "15%" }}>
            {(() => {
              let workers = siteData.reduce(
                (acc, el) => acc + (+el.workers || 0),
                0
              );
              return workers;
            })()}
          </div>
          <div className="table-block nav" style={{ width: "15%" }}>
            {(() => {
              let absent = siteData.reduce(
                (acc, el) => acc + (+el.absent || 0),
                0
              );
              return absent;
            })()}
          </div>
          <div className="table-block nav" style={{ width: "15%" }}>
          {(() => {
              let present = siteData.reduce(
                (acc, el) => acc + (+el.present || 0),
                0
              );
              return present;
            })()}
          </div>
          <div className="table-block nav" style={{ width: "15%" }}></div>
          <div className="table-block nav" style={{ width: "15%" }}></div>
        </div>
      </div>
    </>
  );
}
