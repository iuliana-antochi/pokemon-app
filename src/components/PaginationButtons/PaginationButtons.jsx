import { useNavigate } from "react-router-dom";
import { Pagination } from "./components/Pagination/Pagination.jsx";

export const PaginationButtons = ({ currentPage, totalPages }) => {
  // don't even bother with the rest of the code if currentPage is bigger that totalPages
  // throw the Error to the NotFoundPage

  if (currentPage > totalPages) {
    throw Error("Page not in range");
  }

  const navigate = useNavigate();

  const handleNext = () => navigate(`/page/${currentPage + 1}`);
  const handlePrev = () => navigate(`/page/${currentPage - 1}`);

  return (
    <div className="buttons">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
