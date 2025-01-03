import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";
import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
import { SitesInnerActionsRow } from "./SitesInnerActionsRow";

export function SitesInnerActions({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {

    const [actionsData, setActionsData] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    const sortByButtons = ['site' , 'name' ,'brutto','netto' , 'manager' , 'date' ,'tax'];
  
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
        setActionsData(filteredData);
      }, 100);
  
      return () => clearTimeout(debounce);
    }, [searchTerm , data]);
    const sumTimeBrutto = (siteActionData) => {
      let hours = 0;
      let minutes = 0;
      siteActionData.forEach(el => {
        const time = el.workedTime.brutto;
        hours += Number(time.split(':')[0]);
        minutes += Number(time.split(':')[1]);
      });
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }
    const sumTimeNetto = (siteActionData) => {
      let hours = 0;
      let minutes = 0;
      siteActionData.forEach(el => {
        const time = el.workedTime.netto;
        hours += Number(time.split(':')[0]);
        minutes += Number(time.split(':')[1]);
      });
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }
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
      <SitesInnerSortButtons sortByButtons={sortByButtons} data={actionsData} setData={setActionsData}/>
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
            <div className="table-block nav" style={{ width: "15%" }}>
              Site
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
            Action \ Location
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Worked Time
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
              Date
            </div>
          </div>
          {actionsData.map((el, index) => {
            return <SitesInnerActionsRow key={index} el={el} />;
          })}
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
            </div>
            <div className="table-block nav flex-bruttoNetto" style={{ width: "15%" }}>
              <p>{sumTimeBrutto(data)}</p>
              <p>{sumTimeNetto(data)}</p>
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
            </div>
            <div className="table-block nav" style={{ width: "20%" }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

