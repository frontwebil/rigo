// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Search({ searchTerm, setSearchTerm, currentPage }) {
  const { linkTo, names } = currentPage;

  return (
    <section className="Search">
      <div className="search-container" style={{ justifyContent: "center" }}>
        {/* <div className="button">
          <FaArrowLeft className="arrows"/>
          Back
        </div> */}
        <div className="search-input-container">
          <input
            value={searchTerm}
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* <div className="button">
          Next
          <FaArrowRight className="arrows"/>
        </div> */}
      </div>
      <div className="current-page" style={{ textTransform: "capitalize" }}>
        {names[0]} -{" "}
        <Link
          to={linkTo}
          className={`linkToAll ${names.length == 2 ? "link-current-page" : ""}`}
        >
          {currentPage.names[1]}
        </Link>{" "}
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
