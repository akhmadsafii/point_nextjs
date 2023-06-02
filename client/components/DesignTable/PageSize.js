import React from "react";

const PageSize = ({ pageSizeOptions, pageSize, handlePageSizeChange }) => {
    return (
        <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
            <div className="dataTables_length" id="kt_customers_table_length">
                <label>
                    <select value={pageSize} onChange={handlePageSizeChange}>
                        {pageSizeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
};

export default PageSize;
