export function SitesInnerNav({tabs , activeTab ,handleTabClick}) {


  return (
    <div className="SitesInnerNav">
      <div className="SitesInnerNav-buttons">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`SitesInnerNav-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>


    </div>
  );
}
