import React from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {

  const totalPages = Math.ceil(
    totalItems / itemsPerPage
  );


  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl border">

      <p className="text-gray-600">
        Page {currentPage} of {totalPages || 1}
      </p>


      <div className="flex gap-3">

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg"
        >
          Previous
        </button>


        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Next
        </button>

      </div>

    </div>
  );
};


export default Pagination;