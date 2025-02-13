export function EventLogWorkers({ eventLog, eventHandleClick , setEventLog }) {
  return (
    <>
      <section className="EventsLog">
        <div className="EventsLog-container">
          <button
            className={`EventsLog-button-all ${
              eventLog.length === 0 ? "active" : ""
            }`}
            onClick={() => setEventLog([])}
          >
            Employees: 300
          </button>
          
          <div className="EventsLog-buttons">
            <button
              className={`EventsLog-button ${
                eventLog.includes("Late Entry") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Late Entry")}
            >
              Insured: 250
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Entry not on Site") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Entry not on Site")}
            >
              Pending: 20
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Face Recognition") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Face Recognition")}
            >
              Canceled: 20
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Unauthorized Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Unauthorized Exit")}
            >
              Without Insurance: 10
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Gray Time") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Gray Time")}
            >
              Updated: 7
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
