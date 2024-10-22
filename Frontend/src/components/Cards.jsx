/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CardsComponent = ({ cards }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    const currentCards = cards.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const renderPageButtons = () => {
        const buttons = [];
        const startPage = Math.max(1, currentPage);
        const endPage = Math.min(totalPages, startPage + 4); 

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button id={`Page_${i}`}
                    key={i}
                    className={`px-6 py-2 mx-2 rounded-full border border-transparent 
                        ${currentPage === i 
                            ? 'bg-gradient-to-r from-green-400 to-teal-400 text-white shadow-md'
                            : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 ease-in-out'
                        }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div id='Cards' className="flex flex-col gap-6 p-20 pt-1 mt-6">
            <h1 id='CardsHeader' className="text-black font-[600] text-[40px] ">
                Related articles or posts
            </h1>

            <div id='CardsTable' className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 h-auto w-12/12 pl-auto pt-5 pl-14">
                {currentCards.map((item) => (
                    <div key={item.id} id={`Card_${item.id}`} className="flex flex-col pb-1 h-10/12 w-10/12">
                        <Link className="flex flex-col hover:scale-110 transition-transform" to={`/SinglePost/${item.id}`}>
                            <img className="rounded-lg" src={item.thumbnail} alt={item.title} />
                            <div className="flex flex-col justify-between flex-grow pt-6 h-full">
                                <h3 className="text-black font-[500] text-[20px] line-clamp-1 hover:line-clamp-none capitalize">
                                    {item.title}
                                </h3>
                                <h4 className="font-[500] text-[20px] text-[#787777]">
                                    Author No.{item.id}
                                </h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div id='Pagination' className="flex justify-center items-center mt-10 ml-auto">
                <button id='First'
                    className={`px-6 py-2 mx-2 border border-transparent rounded-full 
                        ${currentPage === 1 
                            ? 'opacity-50 cursor-not-allowed bg-gradient-to-r from-gray-400 to-gray-500 text-white scale-75 -mr-5'
                            : 'bg-gradient-to-r to-purple-700 from-indigo-600 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out'
                        }`}                    
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>

                <button id='Previous'
                    className={`px-6 py-2 mx-2 border border-transparent rounded-full 
                        ${currentPage === 1 
                            ? 'opacity-50 cursor-not-allowed bg-gradient-to-r from-gray-400 to-gray-500 text-white scale-75 -mr-2'
                            : 'bg-gradient-to-r to-purple-500 from-indigo-500 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out'
                        }`}                    
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {renderPageButtons()}

                <button id='Next'
                    className={`px-6 py-2 mx-2 rounded-full border border-transparent 
                        ${currentPage === totalPages 
                            ? 'opacity-50 cursor-not-allowed bg-gradient-to-r from-gray-400 to-gray-500 text-white scale-75 -ml-2'
                            : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out'
                        }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

                <button id='Last'
                    className={`px-6 py-2 mx-2 rounded-full border border-transparent 
                        ${currentPage === totalPages 
                            ? 'opacity-50 cursor-not-allowed bg-gradient-to-r from-gray-400 to-gray-500 text-white scale-75 -ml-4'
                            : 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out'
                        }`}
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </div>
        </div> 
    );
};

export default CardsComponent;
