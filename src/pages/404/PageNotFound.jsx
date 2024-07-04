import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <h1 className="heading text-[110px] text-center py-6 font-medium">
        404 Not Found
      </h1>
      <p className="desc text-center text-base">
        Your visited page not found. You may go to homepage.
      </p>
      <div className="homeButton flex py-4 justify-center">
        <button className="bg-red-600 text-white hover:shadow-2xl hover:shadow-red-600 mb-12 mt-6 text-center rounded px-4 py-2 font-medium">
          <NavLink to={"/"}> Back to Home page</NavLink>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
