import { IoIosInformationCircle } from "react-icons/io";

export function WorkedTimeTableRow({el}) {
  return (
    <div className="table-row">
    <div className="table-block photo-block" style={{ width: "5%" }}>
      <img src={el.photo} alt="" />
    </div>
    <div className="table-block name-block" style={{ width: "15%" }}>
      {el.name || 'N/A'}
    </div>
    <div className="table-block site-block-workedTime" style={{ width: "15%" }}>
      {el.site || 'N/A'}
    </div>
    <div className="table-block customer-block-workedTime" style={{ width: "14%" }}>
      {el.customer || 'N/A'}
    </div>
    <div className="table-block workedTime-block-WorkedTime" style={{ width: "20%" }}>
        <p>{el.workedTime.brutto || 'N/A'}</p>
        <p>{el.workedTime.netto || 'N/A'}</p>
    </div>
    <div className="table-block manager-block-workedTime" style={{ width: "14%" }}>
      {el.manager || 'N/A'}
    </div>
    <div className="table-block days-block" style={{ width: "17%" }}>
      {el.days || 'N/A'}
      <IoIosInformationCircle style={{color: "#2894f4"}} className="info-button"/>
    </div>
  </div>
  )
}
