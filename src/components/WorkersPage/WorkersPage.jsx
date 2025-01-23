import { useEffect, useRef, useState } from "react";
import { SitesInnerEmployeesTableRow } from "../SitesInnerEmployees/SitesInnerEmployeesTableRow";
import { UsersData } from "../../consts/UsersData";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons/SortFiltrButtons";
import { WorkerEventLog } from "../WorkerEventLog/WorkerEventLog";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function WorkersPage({ currentPage }) {
  const [data] = useState(() => {
    return UsersData.map((el) => el.sitesEmployees).flat();
  });
  const [allWorkersData, setAllWorkersData] = useState(data);
  const [eventLog, setEventLog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const sortByButtons = [
    "realEstate",
    "insurance",
    "country",
    "customer",
    "manager",
    "tax",
  ];

  const printRef = useRef(null);

const handleDownloadPdf = async () => {
  const element = printRef.current;
  if (!element) return;

  const canvas = await html2canvas(element, { 
    scale: 1, // Adjust scale if needed
    useCORS: true,
    logging: false
  });
  const data = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const ratio = pdfWidth / imgProperties.width;
  const imgHeight = imgProperties.height * ratio;

  // More precise page calculation
  const totalPages = Math.ceil(imgHeight / pdfHeight);

  for (let i = 0; i < totalPages; i++) {
    if (i > 0) {
      pdf.addPage();
    }

    pdf.addImage(
      data, 
      "PNG", 
      0, 
      -(pdfHeight * i), 
      pdfWidth, 
      imgHeight
    );
  }

  pdf.save("document.pdf");
};

  const SearchInData = (searchText, list) => {
    if (!searchText) return list;
    const cleanSearchText = searchText.replace(/-/g, "").toLowerCase();
    return list.filter(
      ({
        name,
        customer,
        manager,
        realEstate,
        country,
        passport,
        tax,
        phone,
      }) => {
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
      }
    );
  };

  const eventHandleClick = (event) => {
    if (event === "All") {
      setEventLog([]);
    }
    setEventLog((prevLog) => {
      if (prevLog.includes(event)) {
        return prevLog.filter((item) => item !== event);
      } else {
        return [...prevLog, event];
      }
    });
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      let filteredData = data;
      if (searchTerm) {
        filteredData = SearchInData(searchTerm, filteredData);
      }

      if (eventLog.length > 0) {
        filteredData = filteredData.filter((alert) =>
          eventLog.includes(alert.insurance)
        );
      }

      setAllWorkersData(filteredData);
    }, 100);

    return () => clearTimeout(debounce);
  }, [searchTerm, data, eventLog]);
  return (
    <div>
      <Search
        currentPage={currentPage}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <SortFiltrButtons
        sortByButtons={sortByButtons}
        data={allWorkersData}
        setData={setAllWorkersData}
        defaultData={UsersData.map((el) => el.sitesEmployees).flat()}
        handleDownloadPdf={handleDownloadPdf}
      />
      <WorkerEventLog
        eventLog={eventLog}
        setEventLog={setEventLog}
        eventHandleClick={eventHandleClick}
      />

      <div ref={printRef} className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Tax Id
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
              <p>Real Estate</p>
            </div>
            <div className="table-block nav" style={{ width: "6%" }}>
              Info
            </div>
          </div>
          {allWorkersData.map((el, index) => {
            return (
              <SitesInnerEmployeesTableRow key={index} el={el} i={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
