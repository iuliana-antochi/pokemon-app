import "./Header.css";
import logo from "../../assets/pokemon-6.svg"

function Header() {
  return (
    // There is no need for empty tags <>;
    // They exist because each React Component needs to have one parent;
    // This one already has <header> tag that is a parent.
    <>
      <header>
        <img className="logo" src={logo}></img>
        <h1>Pokemon App</h1>
      </header>
    </>
  );
}

export default Header;
