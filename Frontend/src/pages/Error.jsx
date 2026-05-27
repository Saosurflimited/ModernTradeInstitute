import React from "react";
import errorImg from "../assets/error/404 error lost in space-pana.svg";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <img src={errorImg} alt="error image" className="w-full h-[90vh] " />
    </div>
  );
};

export default Error;
