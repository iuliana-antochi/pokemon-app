import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import sadPickachu from "./assets/sadPickachu.png";
import Header from "./Header";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="notFound-div">
        <h2>404 Not Found</h2>{" "}
        <img className="pikachu" src={sadPickachu} alt="sad Pikachu" />
      </div>
      <Link className="link" to="/">
        <button>Go back home</button>
      </Link>
    </>
  );
}

export default NotFoundPage;
