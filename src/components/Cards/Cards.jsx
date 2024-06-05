import "./Cards.css";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

function Cards() {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.results);

      setNextUrl(result.next);
      setPrevUrl(result.previous);
      const totalItems = result.count;
      setTotalPages(Math.ceil(totalItems / 20));
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(nextUrl);
  }, []);

  const handleNext = () => {
    if (nextUrl) {
      fetchData(nextUrl);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (prevUrl) {
      fetchData(prevUrl);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className="cards-wrapper">
        {data.map((item) => (
          <Card key={item.id} name={item.name} />
        ))}
      </div>
      <div className="buttons">
        {error && <p>Error: {error.message}</p>}
        <button onClick={handlePrev} disabled={currentPage === 1 || loading}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || loading}>
          Next
        </button>
      </div>
    </>
  );
}

export default Cards;
