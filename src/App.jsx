import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function App() {
  const { pageNumber } = useParams();
  const currentPage = parseInt(pageNumber, 10) || 1;

  const [totalPages, setTotalPages] = useState(null);
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.count / 20));
    }
  }, [data]);

  const renderHeader =
    !isNaN(currentPage) && currentPage >= 1 && currentPage <= totalPages;

  return (
    <>
      {renderHeader ? <Header /> : null}
      {totalPages !== null ? (
        <Cards currentPage={currentPage} totalPages={totalPages} />
      ): null}
    </>
  );
}

export default App;
