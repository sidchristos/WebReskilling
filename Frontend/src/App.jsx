// eslint-disable-next-line no-unused-vars
import React,  {lazy, Suspense}  from 'react'
import Header from'./components/Header'
import MainScrn from'./components/MainScrn'
import Footer from './components/Footer'
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'

const SinglePost = lazy(() => import("./components/SinglePost"));
const Error = lazy(() => import("./components/Error"));
const TestV2 = lazy(() => import("./components/TestV2"));



const router = createBrowserRouter([
  {path: "/",
    element:
    <Suspense fallback={<Loading />}>
      <MainScrn />
    </Suspense>,
    errorElement: <Error />,
  },
  {path: "/SinglePost/:id",
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
  // V2
  {path: "/TestV2",
    element:
    <Suspense fallback={<Loading />}>
      <TestV2 />
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
