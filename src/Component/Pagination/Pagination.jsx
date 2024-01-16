
import React from 'react';

function Pagination({ currentPage, totalpages, onPageChange }) {
  return (
    <nav aria-label="Page navigation example Page-navigation">
      <ul className="pagination">
        <li className="page-item" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>

        {totalpages.map((item, index) => (
          <li className={`page-item ${currentPage === item ? 'active' : ''}`} key={index} onClick={() => onPageChange(item)}>
            <a className="page-link">{item}</a>
          </li>
        ))}

        <li className="page-item" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalpages[totalpages.length - 1]}>
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
