import "./Header.css";
import logo from "./assets/pokemon-6.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/" className="header-link">
        <header>
          <img className="logo" src={logo} alt="Pikachu"></img>
          <h1>Pokemon World</h1>
        </header>
      </Link>
    </>
  );
}

export default Header;
