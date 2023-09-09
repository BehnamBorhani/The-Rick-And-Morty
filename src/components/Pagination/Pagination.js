import React from "react";
import "./Pagination.scss";

const Pagination = ({ pageCount, page, setPage }) => {
   const pageNumbers = Array.from(Array(pageCount).keys());

   return (
      <ul className="pagination">
         <li className="pagination__number">&lt;</li>
         {pageNumbers
            .map((number) => {
               let pageNumber = number + 1;
               return (
                  <li
                     className={`pagination__number ${
                        pageNumber === page ? "active" : ""
                     }`}
                     key={pageNumber}
                     onClick={() => setPage(pageNumber)}
                  >
                     {pageNumber}
                  </li>
               );
            })
            .splice(0, 5)}
         <li className="pagination__number">&gt;</li>
      </ul>
   );
};

export default Pagination;
