import "./PaginationButtons.css";
import { useNavigate } from "react-router-dom";
import { Pagination } from "./pagination/Pagination";

export const PaginationButtons = ({ currentPage, totalPages }) => {
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

export default PaginationButtons;
