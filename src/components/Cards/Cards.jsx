import { useState, useEffect } from "react";
import "./Cards.css";
import Card from "./component/Card/Card";
import useFetch from "../../hooks/useFetch";

function Cards() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const { data, loading, error } = useFetch(currentUrl);

  useEffect(() => {
    if (data) {
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    }
  }, [data]);

  const handleNext = () => {
    if (nextUrl && currentUrl !== nextUrl) {
      setCurrentUrl(nextUrl);
    }
  };

  const handlePrev = () => {
    if (prevUrl && currentUrl !== prevUrl) {
      setCurrentUrl(prevUrl);
    }
  };

  return (
    <>
      <div className="cards-wrapper">
        {data && data.results
          ? data.results.map((item) => (
              <Card key={item.name} name={item.name} />
            ))
          : null}
      </div>
      <div className="buttons">
        {error && <p>Error: {error.message}</p>}
        <button onClick={handlePrev} disabled={prevUrl === null || loading}>
          Previous
        </button>
        <button onClick={handleNext} disabled={nextUrl === null || loading}>
          Next
        </button>
      </div>
    </>
  );
}

export default Cards;
