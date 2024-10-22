/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';

export default function Header(){
    return (
        <>
            <div id='header' className=" py-14 px-12 md:p-12 lg:p-15  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 w-screen">
                <div  id="Right" className="md:col-span-1  lg:col-span-3">
                    <div className="py-4 lg:py-0 md:py-0  flex flex-col">
                    <h1 className="text-xl font-bold text-black tracking-tight">
                        <a className="text-black font-[500] text-[20px] inline-block " href="/"> Site Name </a>
                    </h1>
                    </div>
                </div>
                <div  id="Left" className="col-span-2  lg:col-span-2 ">
                    <div className="flex flex-col tracking-tight">
                    <ul className="flex flex-row justify-start md:justify-end lg:justify-end gap-5 md:gap-6 lg:gap-7 items-center">
                        <li>
                        <a href="/" className="hover:font-bold font-[500] text-[20px] cursor-pointer text-black">Page</a>
                        </li>
                        <li>
                        <a href="/" className="hover:font-bold font-[500] text-[20px] cursor-pointer text-black">Page</a>
                        </li>
                        <li>
                        <a href="/" className="hover:font-bold font-[500] text-[20px] cursor-pointer text-black">Page</a>
                        </li>
                        <a href="/TestV2">
                                <button className="w-[83px] h-[34px] font-inter font-medium text-[16px] leading-[150%] flex items-center text-white flex-none order-0 flex-grow-0 hover:bg-[#3a3e42]">
                                    TODO
                                </button>
                        </a>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    );
}