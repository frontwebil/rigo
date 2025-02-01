export function EventsLog({ eventLog, eventHandleClick , setEventLog }) {
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
            All
          </button>
          <div className="EventsLog-buttons">
            <button
              className={`EventsLog-button ${
                eventLog.includes("Late Entry") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Late Entry")}
            >
              Late Entry
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Entry not on Site") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Entry not on Site")}
            >
              Entry not on Site
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Face Recognition") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Face Recognition")}
            >
              Face Recognition
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Unauthorized Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Unauthorized Exit")}
            >
              Unauthorized Exit 
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Gray Time") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Gray Time")}
            >
              Gray Time
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Exit not on Site") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Exit not on Site")}
            >
              Exit not on Site
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Late Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Late Exit")}
            >
              Late Exit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
