/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

export default function SinglePost() {

  const  { data }  = useLoaderData();
  
  return (
    <>
      <div key={data.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20 pr-12 pb-32">
        <div className="flex flex-col col-span-1 gap-6 pr-4 tracking-tight">
          <h1 id="title" className="font-[700] text-[64px] text-black  text-left tracking-tight capitalize lg:w-auto xl:w-auto"> 
            {data.title} 
          </h1>
          <h3 id="subheader" className="font-[400] text-[24px] text-[#787777]  text-left">
            <p>{data.safeSubheader}</p>
          </h3>
          <h2 className="font-[500] text-[20px]  text-left "> 
            <p id="par1" className="text-left text-black ">{data.safeParagraph1}</p>
            <br/>
            <p id="par2" className="text-left text-black">{data.safeParagraph2}</p>
            <p id="par3" className="text-left text-black">{data.safeParagraph3}</p>
          </h2>
        </div>
        <div className="flex col-span-1 lg:col-span-1 justify-end pl-0 md:pl-16 lg:pl-28 pr-0 pb-0 -mb-10">  
          <img id="Photo" src={data.photo} className="rounded-lg lg:w-[508px] lg:h-[657px]  "/>
        </div>
      </div>
    </>
  );
}