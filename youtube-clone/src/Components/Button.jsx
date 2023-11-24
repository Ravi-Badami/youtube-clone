import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 m-2 rounded-lg py-2 bg-gray-200 hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
