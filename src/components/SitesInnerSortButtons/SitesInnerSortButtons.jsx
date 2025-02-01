import { useState } from "react";
import { TogleMonthWeek } from "../TogleMonthWeek/TogleMonthWeek";

export function SitesInnerSortButtons({
  data,
  setData,
  sortByButtons,
  timeToggle,
  isWeekCurrent,
  setIsWeekCurrent,
  handleDownloadPdf,
}) {
  const [currentAction, setCurrentAction] = useState("All");
  const [isSorted, setIsSorted] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [sortBy, setSortBy] = useState({ sort: "name", asc: true });

  const handleSortChange = (e) => {
    setSortBy((prev) => ({ ...prev, sort: e.target.value }));
  };

  const handleOrderChange = (e) => {
    setSortBy((prev) => ({ ...prev, asc: e.target.value === "asc" }));
  };

  const compareDates = (dateA, dateB) => {
    const getDateString = (date) => {
      const year = date.year;
      const month = date.month.padStart(2, "0");
      const day = date.day.padStart(2, "0");
      const time = date.time || "00:00"; // Якщо часу немає, використовуємо "00:00"
      return `${year}-${month}-${day} ${time}`;
    };

    const dateStrA = getDateString(dateA);
    const dateStrB = getDateString(dateB);

    return new Date(dateStrA) - new Date(dateStrB);
  };

  const handleSortAction = () => {
    console.log(data);
    const newData = [...data].sort((a, b) => {
      const field = sortBy.sort;
      const isAscending = sortBy.asc;
      let result;

      if (field === "date") {
        result = compareDates(a.date, b.date);
      } else if (field === "netto" || field === "brutto") {
        const valueA = parseInt(a.workedTime[field].split(":")[0], 10);
        const valueB = parseInt(b.workedTime[field].split(":")[0], 10);
        result = valueA - valueB;
      } else {
        let valueA = a[field];
        let valueB = b[field];

        if (!isNaN(valueA) && !isNaN(valueB)) {
          valueA = +valueA;
          valueB = +valueB;
        }

        if (typeof valueA === "string" && typeof valueB === "string") {
          result = valueA.localeCompare(valueB);
        } else {
          result = (valueA || 0) - (valueB || 0);
        }
      }

      return isAscending ? result : -result;
    });

    setIsSorted(true);
    setIsOpenSort(false);
    setData(newData);
  };

  return (
    <div className="SitesInnerNavButtons">
      <div className="SitesInnerNavButtons-buttons">
        <button
          className={`sortFiltrButtons-button ${isSorted && "active"}`}
          onClick={() => setIsOpenSort(!isOpenSort)}
        >
          Sort
        </button>
        <button className="SitesInnerNavButton Tag">Tag</button>
        <div className="flex-actions">
          <button
            onClick={() => setCurrentAction("All")}
            className={`${currentAction === "All" && "activeAction"}`}
          >
            All
          </button>
          <button
            onClick={() => setCurrentAction("At Site")}
            className={`${currentAction === "At Site" && "activeAction"}`}
          >
            At Site
          </button>
          <button
            onClick={() => setCurrentAction("Absent")}
            className={`${currentAction === "Absent" && "activeAction"}`}
          >
            Absent
          </button>
        </div>
        {timeToggle && (
          <TogleMonthWeek
            isWeekCurrent={isWeekCurrent}
            setIsWeekCurrent={setIsWeekCurrent}
          />
        )}
      </div>
      <div className="SitesInnerNavButtons-buttons">
        <button className="SitesInnerNavButton show-hide">Date</button>
        <button className="SitesInnerNavButton show-hide">
          Show\Hide Column
        </button>
        <img
          src="/icons/more.png"
          alt=""
          className="SitesInnerNavButtons-more"
          onClick={() => {
            setIsOpenMore(!isOpenMore);
          }}
        />
      </div>
      {isOpenSort && (
        <div className="sortFiltrButtonsMenu">
          <div className="sortFiltrButtonsMenu-container">
            <div className="select-group">
              <label htmlFor="sortBy">Sort by:</label>
              <select
                name="sortBy"
                id="sortBy"
                onChange={handleSortChange}
                value={sortBy.sort}
              >
                {sortByButtons.map((el, index) => (
                  <option value={el} key={index}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-group">
              <label htmlFor="orderBy">Order:</label>
              <select
                name="orderBy"
                id="orderBy"
                onChange={handleOrderChange}
                value={sortBy.asc ? "asc" : "desc"}
              >
                <option value="asc">By increasing</option>
                <option value="desc">In descending order</option>
              </select>
            </div>
          </div>
          <button className="Sort-button" onClick={handleSortAction}>
            Sort
          </button>
          <button className="Close-button" onClick={() => setIsOpenSort(false)}>
            Close
          </button>
        </div>
      )}
      {isOpenMore && (
        <div className="openMoreButtonsMenu">
          <div
            className="openMoreButtonsMenu-button"
            onClick={handleDownloadPdf}
          >
            Download PDF
            <img src="/icons/download.png" alt="" className="openMoreIcon" />
          </div>
        </div>
      )}
    </div>
  );
}
