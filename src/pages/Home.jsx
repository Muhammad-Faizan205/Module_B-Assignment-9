import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form className="max-w-md bg-white p-8 rounded shadow-blue page">
        <h1 className="text-3xl mb-11">Home page</h1>
        <button className="block mb-7 text-center border-black">
          <Link to="/sign" className="text-3xl ">Sign Up </Link>
        </button>
        <button className="block mb-7 ">
          <Link to="login" className="text-3xl ">Login</Link>
        </button>
      </form>
    </div>
  );
};
export { Home }