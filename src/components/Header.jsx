import React from "react";

const Header = () => {
  return (
    <header className="flex gap-10 items-center text-6xl uppercase">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
        alt="React logo"
        className="w-[120px]"
      />
      <h1 className="text-[#00D8FE] ">The React Quiz</h1>
    </header>
  );
};

export default Header;
