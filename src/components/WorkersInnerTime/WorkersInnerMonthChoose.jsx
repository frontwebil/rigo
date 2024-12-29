import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export function WorkersInnerMonthChoose({currentMonth , handlePrevMonth , handleNextMonth}) {
  return (
    <div className="WorkersInnerTimeChoose">
        <div className="button-WorkersInnerTimeChoose" onClick={handlePrevMonth}>
          <FaArrowLeft className="arrows"/>
          Prev
        </div>
        <p className="WorkersInnerTimeChoose-text">{currentMonth[0].date.day}.{currentMonth[0].date.month}.{currentMonth[0].date.year} - {currentMonth[currentMonth.length-1].date.day}.{currentMonth[currentMonth.length-1].date.month}.{currentMonth[currentMonth.length-1].date.year}</p>
        <div className="button-WorkersInnerTimeChoose" onClick={handleNextMonth}>
          Next
          <FaArrowRight className="arrows"/>
        </div>
    </div>
  )
}
