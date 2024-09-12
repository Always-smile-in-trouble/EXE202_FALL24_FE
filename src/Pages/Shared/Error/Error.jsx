import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error } = useRouteError();
  return (
    <div className=" py-10 bg-[#F0F0F0] dark:bg-gray-700 min-h-screen">
      <div>
        <img
          loading="lazy"
          className="w-2/5 mx-auto"
          src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif"
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="mb-4">{error.message}</p>
        <Link
          to="/"
          className="btn bg-amber-500 hover:bg-amber-600 mt-8 text-white border-0 transition-transform transform hover:scale-95"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
