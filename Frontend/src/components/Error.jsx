// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 px-20 pr-1 w-screen ">
      <h1 className="font-[200] text-[64px] text-black  text-center tracking-tight capitalize pb-3">Oops!</h1>
      <p className="font-[200] text-[32px] text-black  text-center tracking-tight capitalize pb-8">
        Something went wrong or the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="font-[20] text-[32px] text-white  text-center tracking-tight capitalize pb-32 mt-12">
        <button>Go back to Home</button>
      </Link>
    </div>
    </>
  );
}

export default ErrorPage;
