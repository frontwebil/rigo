import { useState, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import { useLocation } from "react-router-dom"; // Імпорт useLocation
import NavButtons from "../NavButtons/NavButtons";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";


export function Header() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttons = [
    { name: "Workers", linkTo: "/workers" },
    { name: "Actions", linkTo: "/actions" },
    { name: "Alerts", linkTo: "/alerts" },
    { name: "Sites", linkTo: "/sites" },
    { name: "Customers", linkTo: "/notFound" },
    { name: "Managers", linkTo: "/notFound" },
    { name: "Real Estate", linkTo: "/notFound", wide: true },
    { name: "Worked Time", linkTo: "/workedTime", wide: true },
    { name: "Insurance", linkTo: "/insurance" },
    { name: "Banking", linkTo: "/banking" },
  ];

  const location = useLocation(); // Поточний шлях
  const [activeButton, setActiveButton] = useState(3); // Початкове значення (Sites)
  const [openBurger, setOpenBurger] = useState(false);

  // Оновлюємо активну кнопку при зміні маршруту
  useEffect(() => {
    const currentIndex = buttons.findIndex((btn) => 
      location.pathname.startsWith(btn.linkTo) // Перевірка, чи починається шлях з базового маршруту
    );
    if (currentIndex !== -1) {
      setActiveButton(currentIndex);
    }
  }, [location.pathname, buttons]);

  function changeActiveButton(index) {
    setActiveButton(index);
  }

  function changeActiveButtonMobile(index) {
    setOpenBurger(false);
    setActiveButton(index);
  }

  return (
    <header className="header">
      <h1 className="logo">
        Pele<span style={{ color: "#00CE26" }}>Time</span>
      </h1>
      <div className="header-flex">
        <NavButtons
          buttons={buttons}
          activeButton={activeButton}
          changeActiveButton={changeActiveButton}
        />
        <div className="nav-controlls">
          <button className="current-user normal-button">
            Gill Dvir
            <CiSettings className="setting-icon" />
          </button>
          <button className="exit-button normal-button">Exit</button>
        </div>
      </div>
      <BurgerMenu
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
        buttons={buttons}
        activeButton={activeButton}
        changeActiveButtonMobile={changeActiveButtonMobile}
      />
    </header>
  );
}
