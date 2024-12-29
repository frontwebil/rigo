export function TogleMonthWeek({setIsWeekCurrent , isWeekCurrent}) {
  return (
    <div className="ToggleMonthWeek">
      <button className={`SitesInnerNavButton date ${isWeekCurrent && 'active'}`} onClick={()=>setIsWeekCurrent(true)}>Week</button>
      <button className={`SitesInnerNavButton date ${!isWeekCurrent && 'active'}`} onClick={()=>setIsWeekCurrent(false)}>Month</button>
    </div>
  )
}
