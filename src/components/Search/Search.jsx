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
        <Link to={linkTo} className="link-current-page" style={{color:"#009DFF" , fontWeight:'bold'}}>
          {currentPage.names[1]}
        </Link>{" "}
        <span style={{color:"#009DFF" , fontWeight:'bold'}}>{names[2] && `- ${names[2]}`}</span>
        <span style={{ textTransform: "capitalize" , color:"#009DFF", fontWeight:'bold'}}>
          {names[3] && ` - ${names[3]}`}
        </span>
      </div>
    </section>
  );
}
