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
                eventLog.includes("Enter") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Enter")}
            >
              Enter
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Exit") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Exit")}
            >
              Exit
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Colleague") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Colleague")}
            >
              Colleague
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
