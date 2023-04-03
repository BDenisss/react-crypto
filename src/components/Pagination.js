import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((page) => (
                <button
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
