import React from "react";
import Button from "./Button";
import { useQuiz } from "../contexts/QuizContext";

const Option = ({ question }) => {
  const { dispatch, answer } = useQuiz();

  const answered = answer !== null;
  return (
    <div className="flex flex-col gap-3">
      {question.options.map((option, index) => (
        <Button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`text-left ${index === answer ? "translate-x-4" : ""}
            ${
              answered
                ? index === question.correctOption
                  ? "bg-[rgb(14,141,161)]"
                  : "bg-[#FDA041]"
                : ""
            }
          } `}
          key={option}
          disabled={answered}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Option;
