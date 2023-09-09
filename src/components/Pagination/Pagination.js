import React from "react";
import "./Pagination.scss";

const Pagination = () => {
   return (
      <ul className="pagination">
         <li className="pagination__number">&lt;</li>
         <li className="pagination__number active">1</li>
         <li className="pagination__number">2</li>
         <li className="pagination__number">3</li>
         <li className="pagination__number">4</li>
         <li className="pagination__number">5</li>
         <li className="pagination__number">&gt;</li>
      </ul>
   );
};

export default Pagination;
