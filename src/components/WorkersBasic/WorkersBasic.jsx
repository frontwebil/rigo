import { InnerTagEditButtons } from "../InnerTagEditButtons/InnerTagEditButtons";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";

const WorkersBasic = ({
  currentPage,
  handleTabClick,
  tabs,
  activeTab,
  updatedCurrentPage,
}) => {
  return (
    <>
      <Search
        currentPage={{ linkTo: currentPage.linkTo, names: updatedCurrentPage }}
      />
      <SitesInnerNav
        handleTabClick={handleTabClick}
        tabs={tabs}
        activeTab={activeTab}
      />
      <InnerTagEditButtons />
      <div className="SitesInnerBasic">
        <div className="SitesInnerBasic-topInfo">
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#00c9d5" }}
            >
              A
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">APP</p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#f67708" }}
            >
              B
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">Summary</p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#c8e368" }}
            >
              C
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">Work</p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#7178f2" }}
            >
              D
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">Documents</p>
          </div>
        </div>
        <div className="SitesInnerBasic-content">
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Created:</p>
              <p className="SitesInnerBasic-content-row-text">07.18.2022</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Languages:</p>
              <p className="SitesInnerBasic-content-row-text">
                Russian, Moldovan
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Last Action:</p>
              <p className="SitesInnerBasic-content-row-text">
                Exit Work 12.03.24
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">APP Version:</p>
              <p className="SitesInnerBasic-content-row-text">4.2</p>
            </div>
          </div>
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Type:</p>
              <p className="SitesInnerBasic-content-row-text">Local</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">SubType:</p>
              <p className="SitesInnerBasic-content-row-text">
                Foreign Employee
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Employee #:</p>
              <p className="SitesInnerBasic-content-row-text">02764</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Name:</p>
              <p className="SitesInnerBasic-content-row-text">Kumar Sahendra</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Gender:</p>
              <p className="SitesInnerBasic-content-row-text">Male</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Birth:</p>
              <p className="SitesInnerBasic-content-row-text">
                06.09.1983, 42 years
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Passport:</p>
              <p className="SitesInnerBasic-content-row-text">HR87200</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Country:</p>
              <p className="SitesInnerBasic-content-row-text">India</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Phone:</p>
              <p className="SitesInnerBasic-content-row-text">531958773</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Visa Termination:
              </p>
              <p className="SitesInnerBasic-content-row-text">26/11/2025</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Languages:</p>
              <p className="SitesInnerBasic-content-row-text">
                Russian, Moldovan
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Apartment:</p>
              <p className="SitesInnerBasic-content-row-text">
                Bnei Brak, Herzl 21/5
              </p>
            </div>
          </div>
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Specialization:
              </p>
              <p className="SitesInnerBasic-content-row-text">Iron Work</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Working Site:</p>
              <p className="SitesInnerBasic-content-row-text">Ramat Aviv 32</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Last Action:</p>
              <p className="SitesInnerBasic-content-row-text">
                Exit Work 12.03.24
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Manager:</p>
              <p className="SitesInnerBasic-content-row-text">Moti Rush</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Schedule:</p>
              <p className="SitesInnerBasic-content-row-text"></p>
            </div>
          </div>
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Created:</p>
              <p className="SitesInnerBasic-content-row-text">07.18.2022</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Languages:</p>
              <p className="SitesInnerBasic-content-row-text">
                Russian, Moldovan
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Last Action:</p>
              <p className="SitesInnerBasic-content-row-text">
                Exit Work 12.03.24
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">APP Version:</p>
              <p className="SitesInnerBasic-content-row-text">4.2</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Apartment:</p>
              <p className="SitesInnerBasic-content-row-text">
                Bnei Brak, Herzl 21/5
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div
              className="table-block nav"
              style={{ width: "12%", justifyContent: "left" }}
            >
              Name
            </div>
            <div className="table-block nav" style={{ width: "22%" }}>
              Passport
            </div>
            <div className="table-block nav" style={{ width: "22%" }}>
              Permission to work
            </div>
            <div className="table-block nav" style={{ width: "22%" }}>
              Driving Licence
            </div>
            <div className="table-block nav" style={{ width: "22%" }}>
              Permission to work at heights
            </div>
          </div>
          <div className="table-row">
            <div
              className="table-block "
              style={{ width: "12%", justifyContent: "left" }}
            >
              Start-End
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              07.02.2022 - 07.02.2027
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              07.02.2022 - 07.02.2027
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              07.02.2022 - 07.02.2027
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              07.02.2022 - 07.02.2027
            </div>
          </div>
          <div className="table-row">
            <div
              className="table-block "
              style={{ width: "12%", justifyContent: "left" }}
            >
              Status
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              Enable
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              Enable
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              Enable
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              Enable
            </div>
          </div>
          <div className="table-row">
            <div
              className="table-block "
              style={{ width: "12%", justifyContent: "left" }}
            >
              Picture
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              <img src="/icons/basic-1.jpg" alt="" className="documentBasicImg"/>
            </div>
            <div className="table-block center" style={{ width: "22%" }}>
              <img src="/icons/basic-2.jpg" alt="" className="documentBasicImg"/>
            </div>
            <div className="table-block center" style={{ width: "22%" }}></div>
            <div className="table-block center" style={{ width: "22%" }}>
              <img src="/icons/basic-4.jpg" alt="" className="documentBasicImg"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkersBasic;
