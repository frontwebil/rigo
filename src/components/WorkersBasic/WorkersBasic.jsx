import { InnerTagEditButtons } from "../InnerTagEditButtons/InnerTagEditButtons";
import { Search } from "../Search/Search";
import { SitesInnerNav } from "../SitesInnerNav/SitesInnerNav";

const WorkersBasic = ({
  currentPage,
  handleTabClick,
  tabs,
  activeTab,
  updatedCurrentPage,
  data,
}) => {
  console.log(data);
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
            <p className="SitesInnerBasic-topInfo-block-text">Personal Info</p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#f67708" }}
            >
              B
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">
              Employment Details
            </p>
          </div>
          <div className="SitesInnerBasic-topInfo-block">
            <h2
              className="SitesInnerBasic-content-block-title"
              style={{ color: "#c8e368" }}
            >
              C
            </h2>
            <p className="SitesInnerBasic-topInfo-block-text">Additional</p>
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
              <p className="SitesInnerBasic-content-row-text">Worker type:</p>
              <p className="SitesInnerBasic-content-row-text">
                foreign employer
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                First Name, Last Name:
              </p>
              <p className="SitesInnerBasic-content-row-text">Kumar Guptha</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Date of Birth:</p>
              <p className="SitesInnerBasic-content-row-text">12.05.1980</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Age:</p>
              <p className="SitesInnerBasic-content-row-text">45 years</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Gender:</p>
              <p className="SitesInnerBasic-content-row-text">Male</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Phone:</p>
              <p className="SitesInnerBasic-content-row-text">050-497-32-16</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Address:</p>
              <p className="SitesInnerBasic-content-row-text">
                Jabotinsky 23, Petah-Tikva (rented by company/rented
                individually)
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Passport:</p>
              <p className="SitesInnerBasic-content-row-text">FA769365</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Language:</p>
              <p className="SitesInnerBasic-content-row-text">Hindi, English</p>
            </div>
          </div>

          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Mispar Oved:</p>
              <p className="SitesInnerBasic-content-row-text">1053</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Country of origin:
              </p>
              <p className="SitesInnerBasic-content-row-text">India</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Specialisation:
              </p>
              <p className="SitesInnerBasic-content-row-text">
                concrete worker
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Site:</p>
              <p className="SitesInnerBasic-content-row-text">
                Ovdim Nethaniya
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Working status:
              </p>
              <p className="SitesInnerBasic-content-row-text">
                active/without work/at hospital/fired
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Start work:</p>
              <p className="SitesInnerBasic-content-row-text">
                15.07.2020, 4 years
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Schedule:</p>
              <p className="SitesInnerBasic-content-row-text">
                St, Mn, Tu, Wd, Th 6:00-17:00, brake: 12:00-12:45, Fr 6:00-12:00
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Coordinator:</p>
              <p className="SitesInnerBasic-content-row-text">Moti Rush</p>
            </div>
          </div>

          <div className="SitesInnerBasic-content-block">
            <div className="SitesInnerBasic-content-row" style={{alignItems:'center'}}> 
              <p className="SitesInnerBasic-content-row-text">
                PHOTO:
              </p>
              <img src={data.photo} alt="" className="icon-basic-user" />
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                System worker type:
              </p>
              <p className="SitesInnerBasic-content-row-text">
                Local/Transit/Free/Office
              </p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">Created:</p>
              <p className="SitesInnerBasic-content-row-text">18.07.2020</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">App Version:</p>
              <p className="SitesInnerBasic-content-row-text">4.2</p>
            </div>
            <div className="SitesInnerBasic-content-row">
              <p className="SitesInnerBasic-content-row-text">
                Last App Activity:
              </p>
              <p
                className="SitesInnerBasic-content-row-text location exit"
                style={{ maxWidth: "" }}
              >
                Exit work - 22.01.2025
              </p>
            </div>
            <p className="SitesInnerBasic-content-row-text link">
              Medical Cartis
            </p>
            <p className="SitesInnerBasic-content-row-text link">
              Health Statement
            </p>
            <div
              className="SitesInnerBasic-content-row"
              style={{ alignItems: "center" }}
            >
              <p className="SitesInnerBasic-content-row-text link">Insurance</p>
              <div
                className="location Active"
                style={{ padding: "5px", maxWidth: "50%" , width:"50%" }}
              >
                Active
              </div>
            </div>
            <div
              className="SitesInnerBasic-content-row"
              style={{ alignItems: "center" }}
            >
              <p className="SitesInnerBasic-content-row-text link">Bet Lamed</p>
              <p className="SitesInnerBasic-content-row-text link">2 files</p>
            </div>
          </div>

          <div className="SitesInnerBasic-content-block">
            <p className="SitesInnerBasic-content-row-text link">Passport</p>
            <p className="SitesInnerBasic-content-row-text link">
              Driving licence
            </p>
            <p className="SitesInnerBasic-content-row-text link">Cartis Oved</p>
            <div
              className="SitesInnerBasic-content-row"
              style={{ alignItems: "center" }}
            >
              <p className="SitesInnerBasic-content-row-text link">
                Permission for work:
              </p>
              <p
                className="SitesInnerBasic-content-row-text"
                style={{ fontSize: "16px" }}
              >
                expire in 8 Days
              </p>
            </div>
            <p className="SitesInnerBasic-content-row-text link inActive">
              Intervisa
            </p>
            <p>
              {" "}
              <br />
            </p>
            <p className="SitesInnerBasic-content-row-text link inActive">
              Adraha Le Gova
            </p>
            <p>
              {" "}
              <br />
            </p>
            <p className="SitesInnerBasic-content-row-text link">Tofes 101</p>
            <p className="SitesInnerBasic-content-row-text link">
              Tlush Maskored
            </p>
            <p className="SitesInnerBasic-content-row-text link">Doh Shaot</p>
            <div
              className="SitesInnerBasic-content-row"
              style={{ alignItems: "center" }}
            >
              <p className="SitesInnerBasic-content-row-text link">
                Tlush Sahar
              </p>
              <p
                className="SitesInnerBasic-content-row-text"
                style={{ fontSize: "16px" }}
              >
                signed, 01.02.2025
              </p>
            </div>
            <p className="SitesInnerBasic-content-row-text link">
              Employment Contract
            </p>
            <p className="SitesInnerBasic-content-row-text link">
              Hiring Letter
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkersBasic;
