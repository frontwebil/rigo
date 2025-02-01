import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function SortFiltrButtons({
  data,
  setData,
  sortByButtons,
  defaultData,
  addCustomers,
  handleDownloadPdf,
}) {
  const checkBoxFiltersOptions = ["country", "status", "companyName", "agent" , "insurance" , "manager" , "customer" , ];
  const [currentAction, setCurrentAction] = useState("All");
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFiltr, setIsOpenFiltr] = useState(false);
  const [sortBy, setSortBy] = useState({ sort: sortByButtons[0], asc: true });
  const [filters, setFilters] = useState({});
  const [checkboxFilters, setCheckboxFilters] = useState(
    checkBoxFiltersOptions.reduce((acc, key) => {
      acc[key] = new Set();
      return acc;
    }, {})
  );

  const [filterOptions, setFilterOptions] = useState(
    checkBoxFiltersOptions.reduce(
      (acc, key) => ({ ...acc, [key]: new Set() }),
      {}
    )
  );

  useEffect(() => {
    const options = checkBoxFiltersOptions.reduce((acc, key) => {
      acc[key] = new Set(defaultData.map((item) => item[key]));
      return acc;
    }, {});
    setFilterOptions(options);

    const initialFilters = Object.fromEntries(
      sortByButtons.map((button) => [
        button,
        checkBoxFiltersOptions.includes(button) ? [] : { from: "", to: "" },
      ])
    );
    setFilters(initialFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultData, sortByButtons]);

  const handleCheckboxChange = (field, value) => {
    setCheckboxFilters((prev) => {
      const updated = new Set(prev[field]);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return { ...prev, [field]: updated };
    });
  };

  const handleFilterChange = (field, type, value) => {
    if (!checkBoxFiltersOptions.includes(field)) {
      setFilters((prev) => ({
        ...prev,
        [field]: { ...prev[field], [type]: value },
      }));
    }
  };

  const handleFilterAction = () => {
    const filteredData = [...defaultData].filter((item) => {
      for (const field of checkBoxFiltersOptions) {
        if (
          checkboxFilters[field].size > 0 &&
          !checkboxFilters[field].has(item[field])
        ) {
          return false;
        }
      }

      return Object.entries(filters).every(([field, range]) => {
        if (checkBoxFiltersOptions.includes(field)) return true;

        let value = item[field];
        let from = range.from;
        let to = range.to;

        const isDate = (val) => /^\d{2}-\d{2}-\d{4}$/.test(val);

        if (isDate(value)) {
          value = new Date(value.split("-").reverse().join("-")).getTime();
          if (from)
            from = new Date(from.split("-").reverse().join("-")).getTime();
          if (to) to = new Date(to.split("-").reverse().join("-")).getTime();
        } else if (!isNaN(value)) {
          value = Number(value);
          from = from ? Number(from) : "";
          to = to ? Number(to) : "";
        }

        const matchesFrom = !from || value >= from;
        const matchesTo = !to || value <= to;

        return matchesFrom && matchesTo;
      });
    });

    setData(filteredData);
    setIsFiltered(true);
    setIsOpenFiltr(false);
  };

  const handleSortChange = (e) => {
    setSortBy((prev) => ({ ...prev, sort: e.target.value }));
  };

  const handleOrderChange = (e) => {
    setSortBy((prev) => ({ ...prev, asc: e.target.value === "asc" }));
  };

  // const handleSortAction = () => {
  //   const newData = [...data].sort((a, b) => {
  //     const field = sortBy.sort;
  //     const isAscending = sortBy.asc;
  //     let valueA = a[field];
  //     let valueB = b[field];
  //     let result;

  //     const isDate = (val) => /^\d{2}-\d{2}-\d{4}$/.test(val);

  //     if (isDate(valueA) && isDate(valueB)) {
  //       valueA = new Date(valueA.split("-").reverse().join("-"));
  //       valueB = new Date(valueB.split("-").reverse().join("-"));
  //     } else if (!isNaN(valueA) && !isNaN(valueB)) {
  //       valueA = +valueA;
  //       valueB = +valueB;
  //     }

  //     if (typeof valueA === "string" && typeof valueB === "string") {
  //       result = valueA.localeCompare(valueB);
  //     } else {
  //       result = (valueA || 0) - (valueB || 0);
  //     }

  //     return isAscending ? result : -result;
  //   });

  //   setIsSorted(true);
  //   setIsOpenSort(false);
  //   setData(newData);
  // };

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

    console.log(newData);
    setIsOpenSort(false);
    setData(newData);
  };

  const resetFilters = () => {
    setFilters(
      Object.fromEntries(
        sortByButtons.map((button) => [
          button,
          checkBoxFiltersOptions.includes(button) ? [] : { from: "", to: "" },
        ])
      )
    );
    setCheckboxFilters(
      checkBoxFiltersOptions.reduce((acc, key) => {
        acc[key] = new Set();
        return acc;
      }, {})
    );
    setIsFiltered(false);
    setData(defaultData);
    setIsSorted(false);
  };

  return (
    <section className="sortFiltrButtons">
      <div className="sortFiltrButtons-container">
        <div className="sortFiltrButtons-flexButtons">
          <button
            className={`sortFiltrButtons-button ${isSorted && "active"}`}
            onClick={() => setIsOpenSort(!isOpenSort)}
          >
            Sort
          </button>
          <button
            className={`sortFiltrButtons-button ${isFiltered && "active"}`}
            onClick={() => setIsOpenFiltr(!isOpenFiltr)}
          >
            Filter
          </button>
          {isFiltered && (
            <button className="sortFiltrButtons-button" onClick={resetFilters}>
              Reset Filters
            </button>
          )}
          <div className="flex-actions">
            <button
              onClick={() => setCurrentAction("Site")}
              className={`${currentAction === "Site" && "activeAction"}`}
            >
              Site
            </button>
            <button
              onClick={() => setCurrentAction("Customer")}
              className={`${currentAction === "Customer" && "activeAction"}`}
            >
              Customer
            </button>
            <button
              onClick={() => setCurrentAction("All")}
              className={`${currentAction === "All" && "activeAction"}`}
            >
              All
            </button>
          </div>
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
                      {el.replace(/([a-z])([A-Z])/g, "$1 $2")}
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
            <button
              className="Sort-button"
              onClick={() => {
                setIsSorted(true);
                handleSortAction();
              }}
            >
              Sort
            </button>
            <button
              className="Close-button"
              onClick={() => setIsOpenSort(false)}
            >
              Close
            </button>
          </div>
        )}
        {isOpenFiltr && (
          <div className="sortFiltrButtonsMenu">
            <div className="sortFiltrButtonsMenu-container">
              <div className="sortFiltrButtonsMenu-container-column">
                {sortByButtons.map((field, i) => (
                  <div className="filter-group" key={i}>
                    <p style={{ textTransform: "capitalize" }}>
                      {field.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </p>
                    {checkBoxFiltersOptions.includes(field) ? (
                      <div className="checkbox-group">
                        {Array.from(filterOptions[field]).map((option, j) => (
                          <label key={j} className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={checkboxFilters[field].has(option)}
                              onChange={() =>
                                handleCheckboxChange(field, option)
                              }
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="inputFlex">
                        <input
                          type="text"
                          className="sortFiltrInputs"
                          placeholder="From"
                          value={filters[field]?.from || ""}
                          onChange={(e) =>
                            handleFilterChange(field, "from", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          className="sortFiltrInputs"
                          placeholder="To"
                          value={filters[field]?.to || ""}
                          onChange={(e) =>
                            handleFilterChange(field, "to", e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button className="Sort-button" onClick={handleFilterAction}>
              Filter
            </button>
            <button
              className="Close-button"
              onClick={() => setIsOpenFiltr(false)}
            >
              Close
            </button>
          </div>
        )}
        {addCustomers && (
          <div className="sortFiltrButtons-flexButtons">
            <Link
              to="/addCustomer"
              className={`sortFiltrButtons-button active`}
            >
              Add Customer
            </Link>
          </div>
        )}
        {isOpenMore && (
          <div className="openMoreButtonsMenu">
            <div
              className="openMoreButtonsMenu-button"
              onClick={handleDownloadPdf}
            >
              Download PDF
              <img src="/icons/download.png" alt="" className="openMoreIcon"/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
