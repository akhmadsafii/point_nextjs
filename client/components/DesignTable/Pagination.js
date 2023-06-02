import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
            <div
                className="dataTables_paginate paging_simple_numbers"
                id="kt_customers_table_paginate"
            >
                <ul className="pagination">
                    <li
                        className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                    >
                        <a
                            href="#"
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </a>
                    </li>
                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        const isCurrentPage = page === currentPage;
                        const isWithinRange = Math.abs(page - currentPage) <= 2;

                        if (
                            page === 1 ||
                            page === totalPages ||
                            isCurrentPage ||
                            isWithinRange
                        ) {
                            return (
                                <li
                                    key={page}
                                    className={`page-item ${
                                        isCurrentPage ? "active" : ""
                                    }`}
                                >
                                    <a
                                        href="#"
                                        className="page-link"
                                        onClick={() => handlePageChange(page)}
                                    >
                                        {page}
                                    </a>
                                </li>
                            );
                        }

                        return null;
                    })}
                    <li
                        className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                        }`}
                    >
                        <a
                            href="#"
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;
