/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';


export default function Footer(){
    return (
    <>
      <div id='footerContainer' className="px-20 pb-10 ">
        <hr />
        <div id='footer' className="pt-12 grid grid-cols-2 gap-8 ">
          <div  id="Left" className="col-span-1">
            <div className="flex flex-col items-start gap-20 ">
              <div>
                <h1 className=" inline-block font-[400] text-[24px] text-slate-900 tracking-tight dark:text-slate-200">
                  <a className="text-black inline-block" aria-label="Blog Logo" href="/"> Site Name </a>
                </h1>
              </div>
              <div className="flex justify-center space-x-3 mt-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" 
                    className="text-gray-500 over:scale-125 cursor-pointer">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" 
                    className="text-gray-500 over:scale-125 cursor-pointer">
                    <FaLinkedinIn size={20} />
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" 
                    className="text-gray-500 over:scale-125 transform cursor-pointer">
                    <FaYoutube size={20} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" 
                    className="text-gray-500 over:scale-125 transform cursor-pointer">
                    <FaInstagram size={20} />
                  </a>
            </div>
            </div>
          </div>
          <div id="Right" className="col-span-1 " >
            <div className="flex flex-row items-end  justify-end tracking-tight">
              <div className="flex flex-col items-end gap-3 md:pr-16 ">
                <span className="text-black font-[500] text-[16px]">Topic</span>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
              </div>
              <div className="flex flex-col items-end gap-3 space-x-20 md:pr-16 ">
                <span className="text-black font-[500] text-[16px]">Topic</span>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
              </div>
              <div className="flex flex-col items-end gap-3 space-x-20 md:pr-16 ">
                <span className="text-black font-[500] text-[16px]">Topic</span>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
                <a className="hover:font-bold cursor-pointer text-[#787777]" href="/">
                  <span>Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}