import { Link, useRouteError } from "react-router-dom";
import "./NotFoundPage.css";
import sadPickachu from "./assets/sadPickachu.png";
import Header from "./Header";

function NotFoundPage() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <div className="notFound-div">
        <h2>404 Not Found</h2>
        {/* The error messages that were thrown in components will be here */}
        {error?.message ? <p>{error.message}</p> : null}
        <img className="pikachu" src={sadPickachu} alt="sad Pikachu" />
      </div>
      <Link className="link" to="/">
        <button>Go back home</button>
      </Link>
    </>
  );
}

export default NotFoundPage;
