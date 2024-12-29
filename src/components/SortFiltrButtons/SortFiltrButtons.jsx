import { useState } from "react";

export function SortFiltrButtons({ sortByButtons, data, setData }) {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [sortBy, setSortBy] = useState({ sort: "name", asc: true });

  const handleSortChange = (e) => {
    setSortBy((prev) => ({ ...prev, sort: e.target.value }));
  };

  const handleOrderChange = (e) => {
    setSortBy((prev) => ({ ...prev, asc: e.target.value === "asc" }));
  };

  const compareDates = (dateA, dateB) => {
    // Create comparable date strings in format YYYY-MM-DD HH:mm
    const getDateString = (date) => {
      const year = date.year;
      const month = date.month.padStart(2, '0');
      const day = date.day.padStart(2, '0');
      const time = date.time;
      return `${year}-${month}-${day} ${time}`;
    };

    const dateStrA = getDateString(dateA);
    const dateStrB = getDateString(dateB);
    
    return new Date(dateStrA) - new Date(dateStrB);
  };

  const handleSortAction = () => {
    const newData = [...data].sort((a, b) => {
      const field = sortBy.sort;
      const isAscending = sortBy.asc;
      let result;

      if (field === 'date') {
        result = compareDates(a.date, b.date);
      } else if (field === 'netto' || field === 'brutto') {
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

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          result = valueA.localeCompare(valueB);
        } else {
          result = (valueA || 0) - (valueB || 0);
        }
      }

      return isAscending ? result : -result;
    });

    setIsOpenSort(false);
    setData(newData);
  };

  return (
    <section className="sortFiltrButtons">
      <div className="sortFiltrButtons-container">
        <div className="sortFiltrButtons-flexButtons">
          <button
            className="sortFiltrButtons-button active"
            onClick={() => setIsOpenSort(!isOpenSort)}
          >
            Sort
          </button>
          <button className="sortFiltrButtons-button active">Filter</button>
        </div>
        <div className="sortFiltrButtons-flexButtons">
          {sortByButtons.includes("date") && (
            <button className="sortFiltrButtons-button">Date</button>
          )}
          <button className="sortFiltrButtons-button">Show/Hide Column</button>
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
      </div>
    </section>
  );
}