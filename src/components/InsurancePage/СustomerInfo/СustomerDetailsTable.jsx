import { CustomerDetailsTableTitles } from "./СustomerDetailsRowTitle";

export function CustomerDetailsTable({ currentAgent }) {
  return (
    <div className="InfoTable">
      <CustomerDetailsTableTitles />

      <div className="InfoTable-container">
        <div
          className="InfoTable-block"
          style={{ borderLeft: "2px solid black" }}
        >
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">HealthCare1</div>
            <div className="InfoTable-text">Agent: Lily Shahar</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">ID Membership:</div>
            <div className="InfoTable-text">945793473</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Insurance:</div>
            <div className="InfoTable-text">Menora</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Effective:</div>
            <div className="InfoTable-text">expiration date</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Branch:</div>
            <div className="InfoTable-text">276</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Claim history:</div>
            <div className="InfoTable-text">Number/Status</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Kupat Holim:</div>
            <div className="InfoTable-text">Clalit</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text underline">History</div>
          </div>
        </div>

        <div className="InfoTable-block">
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Type:</div>
            <div className="InfoTable-text">Foreign Employee</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Employee #:</div>
            <div className="InfoTable-text">02764</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Name:</div>
            <div className="InfoTable-text">{currentAgent.name}</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Gender:</div>
            <div className="InfoTable-text">Male</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Birth:</div>
            <div className="InfoTable-text">06.09.1983, 42 years</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Passport:</div>
            <div className="InfoTable-text">{currentAgent.passport}</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Country:</div>
            <div className="InfoTable-text">{currentAgent.country}</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Phone:</div>
            <div className="InfoTable-text">{currentAgent.phone}</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Visa Termination:</div>
            <div className="InfoTable-text">26/11/2025</div>
          </div>
        </div>

        <div
          className="InfoTable-block"
          style={{ borderRight: "2px solid black" }}
        >
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Company</div>
            <div className="InfoTable-text">{currentAgent.companyName}</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Contact</div>
            <div className="InfoTable-text"></div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Policy renewal:</div>
            <div className="InfoTable-text">Status</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Submission request:</div>
            <div className="InfoTable-text">None</div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text">Accident Report</div>
            <div className="InfoTable-text"></div>
          </div>
          <div className="InfoTable-block-row">
            <div className="InfoTable-text underline">History</div>
          </div>
        </div>
      </div>
    </div>
  );
}
