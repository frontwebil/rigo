import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";
import { WorkersInnerTrackTableRow } from "./WorkersInnerTrackTableRow";
// import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
// import { SitesInnerActionsRow } from "./SitesInnerActionsRow";

export function WorkersInnerTrack({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {

    const [trackData, setTrackData] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    // const sortByButtons = ['site' , 'name' ,'brutto','netto' , 'manager' , 'date'];
  
    const SearchInData = (searchText, list) => {
      if (!searchText) return list;
      const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
      return list.filter(({ name, customer, workedTime, manager , site}) => {
        return (
          name.toLowerCase().includes(cleanSearchText) ||
          customer.toLowerCase().includes(cleanSearchText) ||
          site.toLowerCase().includes(cleanSearchText) ||
          workedTime.brutto.toLowerCase().includes(cleanSearchText) ||
          workedTime.netto.toLowerCase().includes(cleanSearchText) ||
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
        setTrackData(filteredData);
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
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
              Site
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
            Time
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
            Result
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
            Total
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
            Action \ Location
            </div>
          </div>
          {trackData.map((el , i) => {
            return <WorkersInnerTrackTableRow key={i} el={el}/>
          })}
        </div>
      </div>
    </div>
  );
}

