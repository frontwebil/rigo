export function WorkersInnerEventLog({ eventLog, eventHandleClick , setEventLog }) {
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
                eventLog.includes("Enter") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Enter")}
            >
              Enter
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Confirmed") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Confirmed")}
            >
              Confirmed
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("On Confirmation") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("On Confirmation")}
            >
              On Confirmation
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Exit")}
            >
              Exit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
