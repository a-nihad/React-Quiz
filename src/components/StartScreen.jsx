import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-4xl"> Welcome to the React Quiz! </h1>
      <h1 className="text-2xl">
        {numQuestions} questions to test your React mastery
      </h1>
      <button
        className="py-2 px-6 rounded-full bg-[#3F474C] text-xl"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
