import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./style.css";
const Pagination = ({
  totalPosts,
  itemsPerPage,
  currentPost,
  setPage,
  currentPage,
}) => {
  //   console.log(totalPosts);
  let totalPages = Math.ceil(totalPosts / itemsPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  console.log(currentPage);
  return (
    <div className="pagination">
      <button
        className="page-button"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`page-button dark:bg-gray-800 ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className={`page-button ${
          currentPage === totalPages ? "disabled:opacity-75" : ""
        }`}
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
