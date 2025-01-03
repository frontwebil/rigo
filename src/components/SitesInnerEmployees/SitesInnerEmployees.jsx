import { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";
import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
import { SitesInnerEmployeesTableRow } from "./SitesInnerEmployeesTableRow";
// import { SitesInnerActionsRow } from "./SitesInnerActionsRow";

export function SitesInnerEmployees({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {

    const [employeeData, setEmployeeData] = useState(data);
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
  
    useEffect(() => {
      const debounce = setTimeout(() => {
        let filteredData = data;
        if (searchTerm) {
          filteredData = SearchInData(searchTerm, filteredData);
        }
        setEmployeeData(filteredData);
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
      <SitesInnerSortButtons sortByButtons={sortByButtons} data={employeeData} setData={setEmployeeData}/>
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
            <div className="table-block nav" style={{ width: "8%" }}>
            Passport
            </div>
            <div className="table-block nav" style={{ width: "9%" }}>
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
          {employeeData.map((el, index) => {
            return <SitesInnerEmployeesTableRow key={index} el={el} i={index}/>;
          })}
        </div>
      </div>
    </div>
  );
}

