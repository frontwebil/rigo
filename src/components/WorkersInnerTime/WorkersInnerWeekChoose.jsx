import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export function WorkersInnerWeekChoose({currentWeek , handlePrevWeek , handleNextWeek}) {
  return (
    <div className="WorkersInnerTimeChoose">
        <div className="button-WorkersInnerTimeChoose" onClick={handlePrevWeek}>
          <FaArrowLeft className="arrows"/>
          Prev
        </div>
        <button className="WorkersInnerTimeChoose-text">{currentWeek[0].date.day}.{currentWeek[0].date.month}.{currentWeek[0].date.year} - {currentWeek[currentWeek.length-1].date.day}.{currentWeek[currentWeek.length-1].date.month}.{currentWeek[currentWeek.length-1].date.year}</button>
        <div className="button-WorkersInnerTimeChoose" onClick={handleNextWeek}>
          Next
          <FaArrowRight className="arrows"/>
        </div>
    </div>
  )
}
