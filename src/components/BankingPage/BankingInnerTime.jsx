import { useEffect, useState } from "react";
import { EmployeeTimeData } from "../../consts/timeData";
import { Search } from "../Search/Search";
import { SitesInnerSortButtons } from "../SitesInnerSortButtons/SitesInnerSortButtons";
import { WorkersInnerWeekChoose } from "../WorkersInnerTime/WorkersInnerWeekChoose";
import { WorkersInnerMonthChoose } from "../WorkersInnerTime/WorkersInnerMonthChoose";
import { WorkersInnerTimeRow } from "../WorkersInnerTime/WorkersInnerTimeRow";
import { useParams } from "react-router-dom";
import { UsersData } from "../../consts/UsersData";

export function BankingInnerTime({ currentPage }) {
  const data = EmployeeTimeData[0].time;
  const [TimeData, setTimeData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isWeekCurrent, setIsWeekCurrent] = useState(false);
  const [perHour , setPerHour] = useState(0)
  const [salary , setSalary] = useState()
  console.log(isWeekCurrent);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const monthsData = groupDataByMonths(data);
  const allFullWeeks = getFullWorkWeeks(data);
  const { id } = useParams();
  const { name } = UsersData.filter((el) => el.id === id)[0];
  const getWeekMonth = (weekData) => {
    if (!weekData || weekData.length === 0) return 1;
    const middleDay = weekData[Math.floor(weekData.length / 2)];
    return middleDay.date.month;
  };

  useEffect(() => {
    if (isWeekCurrent) {
      if (TimeData.length === monthsData[currentMonthIndex]?.length) {
        const firstDayOfMonth = monthsData[currentMonthIndex]?.[0];
        if (firstDayOfMonth) {
          const weekIndex = allFullWeeks.findIndex((week) =>
            week.some(
              (day) =>
                day.date.year === firstDayOfMonth.date.year &&
                day.date.month === firstDayOfMonth.date.month &&
                day.date.day >= firstDayOfMonth.date.day &&
                day.date.day <= firstDayOfMonth.date.day + 7
            )
          );
          if (weekIndex !== -1) {
            setCurrentWeekIndex(weekIndex);
          }
        }
      }
      setTimeData(allFullWeeks[currentWeekIndex] || []);
    } else {
      setTimeData(monthsData[currentMonthIndex] || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWeekCurrent, currentWeekIndex, currentMonthIndex]);

  function groupDataByMonths(data) {
    const months = {};
    data.forEach((el) => {
      const monthKey = `${el.date.year}-${el.date.month}`;
      if (!months[monthKey]) {
        months[monthKey] = [];
      }
      months[monthKey].push(el);
    });
    return Object.values(months);
  }

  function getFullWorkWeeks(data) {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date.year, a.date.month - 1, a.date.day);
      const dateB = new Date(b.date.year, b.date.month - 1, b.date.day);
      return dateA - dateB;
    });

    const weeks = [];
    let currentWeek = [];
    let lastSunday = null;

    sortedData.forEach((entry) => {
      const currentDate = new Date(
        entry.date.year,
        entry.date.month - 1,
        entry.date.day
      );

      if (entry.day === "Sunday") {
        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
        lastSunday = currentDate;
      }

      if (
        !lastSunday ||
        (currentDate >= lastSunday &&
          currentDate <
            new Date(lastSunday.getTime() + 7 * 24 * 60 * 60 * 1000))
      ) {
        currentWeek.push(entry);
      }
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  }

  function handleNextWeek() {
    if (currentWeekIndex < allFullWeeks.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
      const nextWeek = allFullWeeks[currentWeekIndex + 1];
      const nextWeekMonth = getWeekMonth(nextWeek);
      const monthIndex = monthsData.findIndex(
        (monthData) => monthData[0]?.date.month === nextWeekMonth
      );
      if (monthIndex !== -1) {
        setCurrentMonthIndex(monthIndex);
      }
    }
    setSalary(0)
  }

  function handlePrevWeek() {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
      const prevWeek = allFullWeeks[currentWeekIndex - 1];
      const prevWeekMonth = getWeekMonth(prevWeek);
      const monthIndex = monthsData.findIndex(
        (monthData) => monthData[0]?.date.month === prevWeekMonth
      );
      if (monthIndex !== -1) {
        setCurrentMonthIndex(monthIndex);
      }
    }
    setSalary(0)
  }

  function handleNextMonth() {
    if (currentMonthIndex < monthsData.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
    setSalary(0)
  }

  function handlePrevMonth() {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
    setSalary(0)
  }
  function handleChangePerHour(e) {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPerHour(value);
    }
  }

  function countSalary() {
    const p100 = TimeData.reduce(
      (acc, el) => acc + (Number(el["100"]) || 0),
      0
    ) * 1 * perHour;
    const p125 = TimeData.reduce(
      (acc, el) => acc + (Number(el["125"]) || 0),
      0
    ) * 1.25 * perHour;
    const p150 = TimeData.reduce(
      (acc, el) => acc + (Number(el["150"]) || 0),
      0
    ) * 1.5 * perHour;
    const p175 = TimeData.reduce(
      (acc, el) => acc + (Number(el["175"]) || 0),
      0
    ) * 1.75 * perHour;
    const p200 = TimeData.reduce(
      (acc, el) => acc + (Number(el["200"]) || 0),
      0
    ) * 2 * perHour;
    
    const allSalary = p100 + p125 + p150 + p175 + p200;
    setSalary(allSalary)
  }

  const sortByButtons = [
    "100",
    "125",
    "150",
    "175",
    "200",
    "date",
    "totalTime",
  ];

  return (
    <div>
      <Search
        currentPage={{
          ...currentPage,
          names: [...currentPage.names, name],
        }}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <SitesInnerSortButtons
        isWeekCurrent={isWeekCurrent}
        setIsWeekCurrent={setIsWeekCurrent}
        timeToggle={true}
        sortByButtons={sortByButtons}
        data={TimeData}
        setData={setTimeData}
      />
      {isWeekCurrent ? (
        <WorkersInnerWeekChoose
          currentWeek={TimeData}
          handleNextWeek={handleNextWeek}
          handlePrevWeek={handlePrevWeek}
        />
      ) : (
        <WorkersInnerMonthChoose
          currentMonth={TimeData}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
        />
      )}
      <div>
        <div className="table-container">
          <div className="inputSallary">
            <h2>Pay per hour</h2>
            <input type="text" name="" id="" placeholder="Pay per hour" value={perHour} onChange={handleChangePerHour}/>
            <button onClick={countSalary}>Count</button>
            <h2>Salary:{salary}</h2>
          </div>
          <div className="table">
            <div className="table-row nav">
              <div className="table-block nav" style={{ width: "10%" }}>
                Day
              </div>
              <div className="table-block nav" style={{ width: "10%" }}>
                Start Time
              </div>
              <div className="table-block nav" style={{ width: "10%" }}>
                End Time
              </div>
              <div className="table-block nav" style={{ width: "8%" }}>
                100%
              </div>
              <div className="table-block nav" style={{ width: "8%" }}>
                125%
              </div>
              <div className="table-block nav" style={{ width: "8%" }}>
                150%
              </div>
              <div className="table-block nav" style={{ width: "8%" }}>
                175%
              </div>
              <div className="table-block nav" style={{ width: "8%" }}>
                200%
              </div>
              <div className="table-block nav" style={{ width: "10%" }}>
                Total Hours
              </div>
              <div className="table-block nav" style={{ width: "20%" }}>
                Date
              </div>
            </div>
          </div>
          {(() => {
            const weeks = [];
            let currentWeek = [];

            TimeData.forEach((el, index) => {
              currentWeek.push(el);

              // Додаємо підсумковий рядок після суботи
              if (el.day === "Saturday" || index === TimeData.length - 1) {
                weeks.push([...currentWeek]);
                currentWeek = [];
              }
            });

            return weeks.map((week, weekIndex) => (
              <div key={weekIndex}>
                {week.map((el, index) => (
                  <WorkersInnerTimeRow el={el} key={`${weekIndex}-${index}`} />
                ))}
                <div
                  className="table-row nav"
                  style={{ padding: 0, background: "gray" }}
                >
                  <div className="table-block nav" style={{ width: "10%" }}>
                    Weekly Total:
                  </div>
                  <div
                    className="table-block nav"
                    style={{ width: "10%" }}
                  ></div>
                  <div
                    className="table-block nav"
                    style={{ width: "10%" }}
                  ></div>
                  <div className="table-block nav" style={{ width: "8%" }}>
                    {week.reduce(
                      (acc, el) => acc + (Number(el["100"]) || 0),
                      0
                    )}
                  </div>
                  <div className="table-block nav" style={{ width: "8%" }}>
                    {week.reduce(
                      (acc, el) => acc + (Number(el["125"]) || 0),
                      0
                    )}
                  </div>
                  <div className="table-block nav" style={{ width: "8%" }}>
                    {week.reduce(
                      (acc, el) => acc + (Number(el["150"]) || 0),
                      0
                    )}
                  </div>
                  <div className="table-block nav" style={{ width: "8%" }}>
                    {week.reduce(
                      (acc, el) => acc + (Number(el["175"]) || 0),
                      0
                    )}
                  </div>
                  <div className="table-block nav" style={{ width: "8%" }}>
                    {week.reduce(
                      (acc, el) => acc + (Number(el["200"]) || 0),
                      0
                    )}
                  </div>
                  <div className="table-block nav" style={{ width: "10%" }}>
                    {week.reduce(
                      (acc, el) => acc + (Number(el.totalTime) || 0),
                      0
                    )}
                  </div>
                  <div
                    className="table-block nav"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            ));
          })()}
          {!isWeekCurrent && (
            <div className="table">
              <div className="table-row nav">
                <div className="table-block nav" style={{ width: "10%" }}>
                  Total Hours:
                </div>
                <div className="table-block nav" style={{ width: "10%" }}></div>
                <div className="table-block nav" style={{ width: "10%" }}></div>
                <div className="table-block nav" style={{ width: "8%" }}>
                  {(() => {
                    let total = TimeData.reduce(
                      (acc, el) => acc + (Number(el["100"]) || 0),
                      0
                    );
                    return total;
                  })()}
                </div>
                <div className="table-block nav" style={{ width: "8%" }}>
                  {(() => {
                    let total = TimeData.reduce(
                      (acc, el) => acc + (Number(el["125"]) || 0),
                      0
                    );
                    return total;
                  })()}
                </div>
                <div className="table-block nav" style={{ width: "8%" }}>
                  {(() => {
                    let total = TimeData.reduce(
                      (acc, el) => acc + (Number(el["150"]) || 0),
                      0
                    );
                    return total;
                  })()}
                </div>
                <div className="table-block nav" style={{ width: "8%" }}>
                  {(() => {
                    let total = TimeData.reduce(
                      (acc, el) => acc + (Number(el["175"]) || 0),
                      0
                    );
                    return total;
                  })()}
                </div>
                <div className="table-block nav" style={{ width: "8%" }}>
                  {(() => {
                    let total = TimeData.reduce(
                      (acc, el) => acc + (Number(el["200"]) || 0),
                      0
                    );
                    return total;
                  })()}
                </div>
                <div className="table-block nav" style={{ width: "10%" }}>
                  {(() => {
                    let total = TimeData.reduce(
                      (acc, el) => acc + (Number(el.totalTime) || 0),
                      0
                    );
                    return total;
                  })()}
                </div>
                <div className="table-block nav" style={{ width: "20%" }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
