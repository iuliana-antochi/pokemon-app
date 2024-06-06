import "./Header.css";
import logo from "../../assets/pokemon-6.svg"

function Header() {
  return (
      <header>
        <img className="logo" src={logo}></img>
        <h1>Pokemon App</h1>
      </header>
  );
}

export default Header;
