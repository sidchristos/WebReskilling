// eslint-disable-next-line no-unused-vars
import React,  {lazy, Suspense}  from 'react'
import Header from'./components/Header'
import MainScrn from'./components/MainScrn'
import Error from "./components/Error"
import Footer from './components/Footer'
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'

const SinglePost = lazy(() => import("./components/SinglePost"));

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <Suspense fallback={<Loading />}>
      <MainScrn />,
    </Suspense>,
    errorElement: <Error />,
  },
  {
    path: "/error",
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: "/SinglePost/:id",
    loader: async ({ params }) => {
      const response = await axios.get(
        `http://localhost:3000/post/${params.id}`
      );
      return response;
    },
    element: 
      <Suspense fallback={<Loading />}>
        <SinglePost />,
      </Suspense>,
    errorElement: <Error />,
  },
]);


export default function App(){

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header/>
        <RouterProvider router={router} />
        <Footer/>
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
