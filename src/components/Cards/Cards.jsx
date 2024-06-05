import "./Cards.css";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

function Cards() {

  // I would suggest creating a custom hook that you pass the request url to
  // and it returns {data, isLoading, error}
  // It can be reused in the Card Component as well where you have network request
  // Read more: https://react.dev/learn/reusing-logic-with-custom-hooks 

  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const [prevUrl, setPrevUrl] = useState(null);
  // its a good practice to name boolean type variables using 'is'
  // isLoading in this example
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
    // You get an eslint warning here that you didnt include nextUrl in the array dependencies;
    // But if you add it, it will forever fetch the next url;
    // You correctly set the empty array, since this is a request that is only done once on page mount;
    // I would suggest removing the default value of nextUrl state;
    // And moving that url into a const initialUrl; 
    // fetchData(initialUrl);
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
        {/*// you dont need currentPage value technically
          // the API returns "prev" property as null when you are on the first page
          // Simply check if prevUrl === null 
          // In this case you can remove the currentPage state altogether */}
        <button onClick={handlePrev} disabled={currentPage === 1 || loading}>
          Previous
        </button>
        <button
          onClick={handleNext}
          // you dont need the number of totalPages
          // the API returns "next" property as null when you are on the last page
          // Simply check if nextUrl === null 
          // In this case you can remove the totalPages and currentPage state altogether
          disabled={currentPage === totalPages || loading}>
          Next
        </button>
      </div>
    </>
  );
}

export default Cards;
