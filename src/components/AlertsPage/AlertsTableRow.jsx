import { HiOutlineHome } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlineWrapText } from "react-icons/md";

export function AlertsTableRow({el}) {
  return (
        <div className="table-row">
          <div className="table-block-info photo-block" style={{ width: '5%' }}>
            <img src={el.photo || 'placeholder.jpg'}/>
          </div>
          <div className="table-block-info name-block" style={{ width: '15%' }}>
            {el.name || 'N/A'}
          </div>
          <div className="table-block-info phone-block" style={{ width: '13%' }}>
            {el.phone || 'N/A'}
          </div>
          <div className="table-block-info site-block" style={{ width: '17%' }}>
            {el.site || 'N/A'}
            <HiOutlineHome className="house-info"/>
          </div>
          <div className="table-block-info site-location" style={{ width: '18%' }}>
            <div className={`location ${el.location.type == 'Enter' ? 'enter' : ''} ${el.location.type == 'Exit' ? 'exit' : ''} ${el.location.type == 'Colleague' ? 'colleague' : ''}`}>{el.location.type}</div>
            <div className="distance">{el.location.distance}</div>
          </div>
          <div className="table-block-info manager-block" style={{ width: '11%' }}>
            {el.manager || 'N/A'}
          </div>
          <div className="table-block-info date-block" style={{ width: '21%' }}>
            {<p>{el.date.time} {el.date.day}.{el.date.month}.{el.date.year}</p> || 'N/A'}
            <div className="table-block-flex">
            <HiPencilAlt className="edit-block"/>
            <MdOutlineWrapText className="recent-block"/>
            </div>
          </div>
        </div>
      );
    }

