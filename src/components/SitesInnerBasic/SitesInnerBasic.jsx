import { InnerTagEditButtons } from "../InnerTagEditButtons/InnerTagEditButtons";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";

export default function SitesInnerBasic({
  data,
  currentPage,
  updatedCurrentPage,
  handleTabClick,
  tabs,
  activeTab,
}) {
  const { settings, summary, schedule } = data;
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
      <InnerTagEditButtons/>
      <div className="SitesInnerBasic">
        <div className="SitesInnerBasic-topInfo">
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#00c9d5" }}
            >
              A
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">Settings</p>
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
            <p className="SitesInnerBasic-topInfo-block-text">Schedule</p>
          </div>
        </div>
        <div className="SitesInnerBasic-content">
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Location:</p>
              <p
                className="SitesInnerBasic-content-row-text"
                style={{ textDecoration: "underline" }}
              >
                {settings.locationName}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Radius:</p>
              <p className="SitesInnerBasic-content-row-text">
                {settings.radius}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Coordinates:</p>
              <p className="SitesInnerBasic-content-row-text">
                {settings.coordinates}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Location:</p>
              <p className="SitesInnerBasic-content-row-text">
                {settings.location}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Location:</p>
              <p
                className="SitesInnerBasic-content-row-text"
                style={{ textDecoration: "underline" }}
              >
                {settings.locationDate}
              </p>
            </div>
          </div>
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Managers:</p>
              <p className="SitesInnerBasic-content-row-text">
                {summary.manager}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">At Site:</p>
              <p className="SitesInnerBasic-content-row-text">
                {summary.atSite}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Present:</p>
              <p className="SitesInnerBasic-content-row-text">
                {summary.present}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Absent:</p>
              <p className="SitesInnerBasic-content-row-text">
                {summary.absent}
              </p>
            </div>
          </div>
          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p
                className="SitesInnerBasic-content-row-text"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                1st Shift:
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">1-5 :</p>
              <p className="SitesInnerBasic-content-row-text">
                {schedule.firstShift["1-5"]}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">6 :</p>
              <p className="SitesInnerBasic-content-row-text">
                {schedule.firstShift["6"]}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Transportation:
              </p>
              <p className="SitesInnerBasic-content-row-text">
                {schedule.firstShift.transportation}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Break:</p>
              <p className="SitesInnerBasic-content-row-text">
                {schedule.firstShift.break}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p
                className="SitesInnerBasic-content-row-text"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                2st Shift:
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">1-5 :</p>
              <p className="SitesInnerBasic-content-row-text">
                {schedule.secondShift["1-5"]}
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">6 :</p>
              <p className="SitesInnerBasic-content-row-text">
                {schedule.secondShift["6"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
