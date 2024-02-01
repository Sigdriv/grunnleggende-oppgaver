import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <div className=" p-5">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
