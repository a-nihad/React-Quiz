import React from "react";
import Button from "./Button";
import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage >= 40 && percentage < 60) emoji = "😇";
  if (percentage < 40) emoji = "🤦‍♂️";

  return (
    <div className="w-full space-y-10 text-center text-xl">
      <h1 className="w-full rounded-full bg-[rgb(14,141,161)] py-5 text-center">
        <span> {emoji} </span> Your scored <strong> {points} </strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </h1>
      <h1> ( Highscore: {highscore} pont ) </h1>
      <div>
        <Button onClick={() => dispatch({ type: "restart" })}>
          Restart Quiz
        </Button>
      </div>
    </div>
  );
};

export default FinishScreen;
