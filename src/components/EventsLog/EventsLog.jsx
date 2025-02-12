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
            All : 500
          </button>
          <div className="EventsLog-buttons">
            <button
              className={`EventsLog-button ${
                eventLog.includes("Late Entry") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Late Entry")}
            >
              Late Entry : 230
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Entry not on Site") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Entry not on Site")}
            >
              Entry not on Site : 220
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Face Recognition") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Face Recognition")}
            >
              Face Recognition : 400
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Unauthorized Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Unauthorized Exit")}
            >
              Unauthorized Exit : 130
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Gray Time") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Gray Time")}
            >
              Gray Time : 210
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Exit not on Site") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Exit not on Site")}
            >
              Exit not on Site : 253
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Late Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Late Exit")}
            >
              Late Exit : 250
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
