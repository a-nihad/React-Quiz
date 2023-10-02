import React from "react";
import Button from "./Button";
import { useQuiz } from "../contexts/QuizContext";

const StartScreen = () => {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="space-y-5 text-center">
      <h1 className="text-4xl"> Welcome to the React Quiz! </h1>
      <h1 className="text-2xl">
        {numQuestions} questions to test your React mastery
      </h1>
      <Button onClick={() => dispatch({ type: "start" })}>Let's start</Button>
    </div>
  );
};

export default StartScreen;
