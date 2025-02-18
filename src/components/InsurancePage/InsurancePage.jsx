import { useState } from "react";
import { insurance } from "../../consts/insurance";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { InsuranceRowTitle } from "./InsuranceRowTitle";
import { InsuranceRow } from "./InsuranceRow";
import InsuranceActionStart from "./InsuranceActionStart";

const InsurancePage = ({ currentPage }) => {
  const [insuranceData, setInsuranceData] = useState(insurance);
  const [searchTerm, setSearchTerm] = useState("");
  const [openRowId, setOpenRowId] = useState(null);
  const sortByButtons = [
    "tax",
    "notes",
    "alerts",
    "country",
    "status",
    "companyName",
    "agent",
  ];

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
      />
      <SortFiltrButtons
        sortByButtons={sortByButtons}
        data={insuranceData}
        setData={setInsuranceData}
        defaultData={insurance}
      />
      <InsuranceActionStart/>
      <div className="table-container">
        <InsuranceRowTitle />
        {insuranceData.map((el, i) => {
          return (
            <InsuranceRow
              key={i}
              el={el}
              i={i}
              openRowId={openRowId}
              setOpenRowId={setOpenRowId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InsurancePage;
