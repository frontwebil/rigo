export function WorkerEventLog({ eventLog, eventHandleClick , setEventLog }) {
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
                eventLog.includes("Pending") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Pending")}
            >
              Pending
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Empty") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Empty")}
            >
              Empty
            </button>
            <button
              className={`EventsLog-button ${
                eventLog.includes("Canceled") ? "active" : ""
              }`}
              onClick={() => eventHandleClick("Canceled")}
            >
              Canceled
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
