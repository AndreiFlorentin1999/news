import { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = "custom-dropdown-menu";
  if (isDisplayed) {
    dropdownMenuClasses += " display-mobile-menu";
  }

  return (
    <header className="Header">
      <nav className="nav bg-primary w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to = "/" className="p-3">
            <img
              src="https://img.icons8.com/?size=100&id=W5To6Q3gjDiK&format=png&color=000000"
              alt="itschool logo"
            />
          </Link>
          <div className="menu-icon-container">
            <span
              onClick={handleMenuClick}
              className="material-icons menu-icon text-light">
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
              <Link to = "/category/technology" className="p-3">
                  Tech
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
              <Link to = "/category/football" className="p-3">
                  Fotbal
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
              <Link to = "/category/education" className="p-3">
                  Educatie
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
              <Link to = "/favorites" className="p-3">
                Favorite
                </Link>
              </li>
              
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
