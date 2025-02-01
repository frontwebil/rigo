import { useState } from "react";

export function InnerTagEditButtons() {
  const [isOpenMore, setIsOpenMore] = useState(false);


  return (
    <div className="SitesInnerNavButtons" style={{paddingTop:0}}>
      <div className="SitesInnerNavButtons-buttons">
        <button className="SitesInnerNavButton Edit">
          Edit
        </button>
        <button className="SitesInnerNavButton Tag">Tag</button>
      </div>
      <div className="SitesInnerNavButtons-buttons">
        {/* <button className="SitesInnerNavButton show-hide">
          Date
        </button> */}
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
      {isOpenMore && (
          <div className="openMoreButtonsMenu">
            <div
              className="openMoreButtonsMenu-button"
            >
              Download PDF
              <img src="/icons/download.png" alt="" className="openMoreIcon"/>
            </div>
          </div>
        )}
    </div>
  );
}
