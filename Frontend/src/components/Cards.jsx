/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";

export default function cards({ cards }){
    return (
        <div className="flex flex-col gap-6 p-20 pt-1 mt-6">
        <h1 className="text-black font-[600] text-[40px] ">
          Related articles or posts
        </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 h-auto w-12/12 pl-auto pt-5">
            {cards.map((item) => (
                <div key={item.id} className="flex flex-col pb-1 h-10/12 w-10/12">
                <Link
                    className="flex flex-col  hover:scale-110 transition-transform "
                    to={`/SinglePost/${item.id}`}
                >
                    <img
                    className=" aspect-square rounded-lg  "
                    src={item.thumbnail}
                    />
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
        </div> 
    );
}