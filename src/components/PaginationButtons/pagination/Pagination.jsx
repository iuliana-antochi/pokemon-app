import "./Pagination.css";
import { useNavigate } from "react-router-dom";

const pagesToShow = 5;

export const Pagination = ({ totalPages, currentPage }) => {
  const navigate = useNavigate();
  const handlePageChange = (page) => {
    navigate(`/page/${page}`);
  };

  const handleClick = (page) => {
    return () => {
      handlePageChange(page);
    };
  };

  let startPage = currentPage - Math.floor(pagesToShow / 2);
  let endPage = startPage + pagesToShow - 1;

  if (startPage < 1) {
    startPage = 1;
    endPage = pagesToShow;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - pagesToShow + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  const buttons = [];
  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button key={i} onClick={handleClick(i)} disabled={currentPage === i}>
        {i}
      </button>,
    );
  }

  return <div className="pagination-container">{buttons}</div>;
};

export default Pagination;
