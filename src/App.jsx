import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { PaginationButtons } from "./components/PaginationButtons/PaginationButtons";

const itemsPerPage = 20;

const isPositiveNumber = (str) => {
  const num = parseInt(str);
  return !isNaN(num) && num > 0;
};

function App() {
  const { pageNumber } = useParams();

  if (!isPositiveNumber(pageNumber)) {
    throw Error("Page not in range");
  }

  const currentPage = parseInt(pageNumber, 10) || 1;

  const offset = (currentPage - 1) * itemsPerPage;

  const { data, loading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage}&offset=${offset}`
  );

  if (loading) {
    return <p>loading...</p>;
  }

  if (data) {
    const totalPages = Math.ceil(data.count / 20);

    return (
      <>
        <Header />
        <Cards data={data} totalPages={totalPages} />
        <PaginationButtons currentPage={currentPage} totalPages={totalPages} />
      </>
    );
  }
}

export default App;
