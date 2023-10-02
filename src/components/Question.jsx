import React from "react";
import Option from "./Option";
import { useQuiz } from "../contexts/QuizContext";

const Question = () => {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h1 className="mb-5 text-2xl font-semibold"> {question.question} </h1>
      <Option question={question} />
    </div>
  );
};

export default Question;
