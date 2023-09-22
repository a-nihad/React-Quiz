import React from "react";

const Button = ({ onClick, className, disabled, children }) => {
  return (
    <button
      className={`rounded-full border-2 border-[#3F474C] bg-[#3F474C] px-8 py-3 text-xl hover:bg-transparent ${className} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
