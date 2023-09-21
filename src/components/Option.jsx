import React from "react";

const Option = ({ options }) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <button
          className="text-left bg-[#3F474C] py-3 px-8 rounded-full text-xl hover:translate-x-4  hover:bg-transparent border-2 border-[#3F474C] "
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
