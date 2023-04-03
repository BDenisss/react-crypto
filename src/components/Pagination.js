import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination__container">
            {pages.map((page) => (
                <button className="pagination"
                    key={page}
                    onClick={() => handlePageChange(page)}
                    style={currentPage === page ? { fontWeight: 'bold' } : null}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
