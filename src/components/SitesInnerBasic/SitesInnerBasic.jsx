import { LuNotepadText } from "react-icons/lu";
import { RiInfoCardLine } from "react-icons/ri";
import { RiContactsBook2Line } from "react-icons/ri";
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
      <div className="SitesInnerBasic">
        <div className="SitesInnerBasic-topInfo">
          <div className="SitesInnerBasic-topInfo-block">
            <RiInfoCardLine
              className="SitesInnerBasic-topInfo-block-img"
              style={{ background: "#00b8c3" }}
            />
            <p className="SitesInnerBasic-topInfo-block-text">Settings</p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <RiContactsBook2Line
              className="SitesInnerBasic-topInfo-block-img"
              style={{ background: "#ed7207" }}
            />
            <p className="SitesInnerBasic-topInfo-block-text">Summary</p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <LuNotepadText
              className="SitesInnerBasic-topInfo-block-img"
              style={{ background: "#c8e368" }}
            />
            <p className="SitesInnerBasic-topInfo-block-text">Schedule</p>
          </div>
        </div>
        <div className="SitesInnerBasic-content">
          <div className="SitesInnerBasic-content-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#00C9D5" }}
            >
              A
            </h2>
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
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#F67708" }}
            >
              B
            </h2>
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
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#CFE67D" }}
            >
              C
            </h2>
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
