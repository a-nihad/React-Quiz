import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header>
      <input
        type="range"
        max={numQuestions}
        value={index + Number(answer !== null)}
        className="w-full accent-[#00D8FE]"
        readOnly
      />
      <div className="flex justify-between">
        <h1>
          Question {index + 1}/{numQuestions}
        </h1>
        <h1>
          Question {points}/{maxPossiblePoints}
        </h1>
      </div>
    </header>
  );
};

export default Progress;
