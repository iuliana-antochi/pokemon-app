import { useNavigate } from "react-router-dom";
import "./Cards.css";
import Card from "./component/Card/Card";
import useFetch from "../../hooks/useFetch";
import Pagination from "./component/Pagination/Pagination";
import NotFoundPage from "../../NotFoundPage";

function Cards({ totalPages, currentPage }) {
  const navigate = useNavigate();
  const itemsPerPage = 20;
  const offset = (currentPage - 1) * itemsPerPage;

  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${offset}`
  );

  const handleNext = () => navigate(`/page/${currentPage + 1}`);
  const handlePrev = () => navigate(`/page/${currentPage - 1}`);

  if (loading) {
    return <p>Loading...</p>;
  } else if (data && (currentPage > totalPages || currentPage < 1)) {
    return <NotFoundPage />;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return (
      <>
        <div className="cards-wrapper">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            data &&
            data.results.map((item) => (
              <Card key={item.name} name={item.name} />
            ))
          )}
        </div>
        <div className="buttons">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Previous
          </button>
          <Pagination totalPages={totalPages} currentPage={currentPage} />
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Cards;
