import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestV2() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/todos");
      setData(response.data);
    };
    fetchData();
  }, []);

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= totalPages) {
      setCurrentPage(value);
    } else if (e.target.value === '') {
      setCurrentPage('1');
    }
  };

  return (
    <>
      <div id="Test" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 px-20 pr-1 w-screen mb-20">
        <h1 className="font-light text-[48px] text-black text-center tracking-tight capitalize pb-6">
          TODOS fake REST API
        </h1>

        <ul className="space-y-2 transition-opacity duration-700 ease-in-out">
          {currentData.map((item) => (
            <li key={item.id} className="p-3 border border-gray-300 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-lg font-semibold text-gray-900 capitalize">
                {item.title}
              </h2>
              <span className="text-sm text-gray-500">
                Task ID: {item.id}
              </span>
              <span className={`text-sm block mt-1 ${item.completed ? 'text-green-600' : 'text-red-600'}`}>
                Status: {item.completed ? "Completed" : "Pending"}
              </span>
            </li>
          ))}
        </ul>

        <div id='Pagination' className="flex justify-center mt-10 space-x-4">
          <button
            className={`px-4 py-2 bg-indigo-500 text-white rounded-full 
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={handlePageInputChange}
            className="inline-block w-16 text-center px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-indigo-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />

          <button
            className={`px-4 py-2 bg-indigo-500 text-white rounded-full 
              ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default TestV2;
