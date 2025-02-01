import { Link, useNavigate } from "react-router-dom";

export function Search({ searchTerm, setSearchTerm, currentPage }) {
  const { linkTo, names } = currentPage;
  const navigate = useNavigate();
  return (
    <section className="Search">
      <div className="search-container" style={{ justifyContent: "center" }}>
        <div className="BackTo">
            <div className="BackTo-button" onClick={() => navigate(-1)}>
              <img src="/icons/arrow.png" alt="" style={{ transform: "scaleX(-1)" }} className="navBackNext"/>
              <p>Back</p>
            </div>
          </div>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search"
            className="content-input-inner"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
          <div className="BackTo">
            <div className="BackTo-button" onClick={() => navigate(+1)}>
              <p>Next</p>
              <img src="/icons/arrow.png" alt="" className="navBackNext"/>
            </div>
          </div>

      </div>
      <div className="current-page" style={{ textTransform: "capitalize" }}>
        {names[0]} -{" "}
        <Link
          to={linkTo}
          className={`linkToAll ${names.length == 2 ? "link-current-page" : ""}`}
        >
          {currentPage.names[1]}
        </Link>{""}
        <span className={`${names.length == 3 ? "link-current-page" : ""}`}>
          {names[2] && `- ${names[2]}`}
        </span>
        {names[3] && (
          <>
            {" - "} 
            <span className={names.length == 4 ? "link-current-page" : ""}>
            {names[3]}
          </span>
          </>
        )}
      </div>
    </section>
  );
}
