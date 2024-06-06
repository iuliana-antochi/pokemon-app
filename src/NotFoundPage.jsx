import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import sadPickachu from "./assets/sadPickachu.png"

function NotFoundPage() {
  return (
    <>
      <div><h2>404 Not Found</h2> <img className="pickachu" src={sadPickachu} alt="sad Pickachu"/></div>
      <Link className="link" to="/">
        Go back home
      </Link>
    </>
  );
}

export default NotFoundPage;
