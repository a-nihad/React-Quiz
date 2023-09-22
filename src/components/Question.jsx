import React from "react";
import Option from "./Option";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-semibold"> {question.question} </h1>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
