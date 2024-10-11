/* eslint-disable no-unused-vars */
import React, { useState, useEffect,lazy,Suspense } from 'react'
import axios from 'axios'

const IntroPost = lazy(() => import('./IntroPost'))
const Cards = lazy(() => import('./Cards'))

export default function MainScrn(){

    const [cards, setCards] = useState([]);
    const [intro, setIntro] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3000/posts?limit=9");
            setCards(response.data);
            const response2 = await axios.get("http://localhost:3000/post/intro");
            setIntro(response2.data);
        };
        fetchData();
    }, []); 


    return (
        <>
        <Suspense fallback={<Loading />}>
            <IntroPost intro={intro}/>
            <Cards cards={cards} /> 
        </Suspense>
        </>
    );
}

function Loading() {
    return (
      <h2 className="w-screen h-screen flex justify-center items-center font-[700] text-[64px] text-black text-left tracking-tight capitalize">
        🌀 Loading...
      </h2>
    );
  }  