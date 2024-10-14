/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function IntroPost({ intro }){
    return (
        <>
        <div className="introPost">
            <div className="flex flex-col gap-10  px-20">
            <div>
                <h1 id="title" className="font-bold text-black text-[64px] tracking-tight"> {intro.title} </h1>
                <h4 id="line1" className="text-[#787777] text-[24px] font-[400] tracking-tight mt-7"> {intro.IntroLine1} </h4> 
                <h4 id="line2" className="text-[#787777] text-[24px] font-[400] tracking-tight">{intro.IntroLine2}</h4>
                <img id="img1" className="pt-10 rounded-lg" src={intro.photo}></img>
            </div>
            <div className="flex flex-wrap gap-8  lg:px-52 md:px-32  text-black text-l text-[20px] font-[500] tracking-tight w-11/12 h-full lg:ml-20">
                <p id="par1" className=' 2xl:ml-40 '> {intro.paragraph1} </p>
                <p id="par2" className=' 2xl:ml-40'> {intro.paragraph2} </p>
                <p id="par3" className=' 2xl:ml-40'> {intro.paragraph3} </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-rows-1 gap-8 lg:h-dvh w-full lg:-mb-20">
                <img id="img2" className="rounded-lg  md:h-5/6 lg:h-5/6 sm:h-auto w-full " src={intro.photo2}></img>
                <img id="img3" className="rounded-lg  md:h-5/6 lg:h-5/6 sm:h-auto w-full " src={intro.photo3}></img>
            </div>
            <div className="flex flex-col gap-6 lg:pb-12 lg:px-52 md:px-32 text-black text-[20px] font-[500] tracking-tight w-10/12 h-full -mt-11 lg:ml-20">
                <p id="par4" className=' 2xl:ml-40'> {intro.paragraph4} </p>
                <p id="par5" className=' 2xl:ml-40'> {intro.paragraph5} </p>
            </div>
            </div>
        </div>
        </>  
    );
}