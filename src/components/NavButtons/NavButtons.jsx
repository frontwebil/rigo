import { Link } from "react-router-dom";

export default function NavButtons({
  buttons,
  activeButton,
  changeActiveButton,
}) {
  return (
    <div className="nav-buttons">
      {buttons.map((el, index) => {
        return (
            <Link key={index} to={el.linkTo}
              className={`${
                el.wide ? "nav-button wide-button" : "nav-button normal-button"
              } ${index === activeButton ? "active" : ""}`}
              onClick={() => changeActiveButton(index)}
            >
              {el.name}
            </Link>
        );
      })}
    </div>
  );
}
