import { IoMdMenu } from "react-icons/io";
import { useRef } from "react";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

export function BurgerMenu({
  openBurger,
  setOpenBurger,
  buttons,
  activeButton,
  changeActiveButtonMobile,
}) {
  const contentRef = useRef(null);

  return (
    <div className="flex-mobile">
      <IoMdMenu
        className={`header-flex-mobile-button ${openBurger ? "active" : ""}`}
        onClick={() => setOpenBurger(!openBurger)}
      />
      <div
        className={`header-flex-mobile ${openBurger ? "open" : ""}`}
        style={{
          maxHeight: openBurger ? `${contentRef.current.scrollHeight + 20}px` : "0",
        }}
      >
        <div ref={contentRef} className="header-flex-mobile-content">
          <div className="mobile-userName-row">
            <p className="mobile-userName">Gill Dvir</p>
            <button className="mobile-exit-button">Logout</button>
          </div>
          {buttons.map((el, index) => {
            return (
              <Link to={el.linkTo}
                className={`mobile-burger-button ${
                  index === activeButton ? "active" : ""
                }`}
                onClick={() => changeActiveButtonMobile(index)}
                key={index}
              >
                {el.name}{" "}
              </Link>
            );
          })}
          <div className="setting">
            Settings <CiSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
