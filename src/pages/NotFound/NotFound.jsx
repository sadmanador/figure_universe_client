import React from "react";
import { Link } from "react-router-dom";
import { BsFillBackspaceFill } from "react-icons/bs";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: "url('assets/404/404.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="mx-auto min-h-screen text-center"
    >
      <Link to="/">
        <button className="btn btn-warning btn-xl normal-case text-2xl mt-48 shadow-xl">
          <BsFillBackspaceFill className="mr-8"/>Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
