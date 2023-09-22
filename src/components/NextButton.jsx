import React from "react";
import Button from "./Button";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <Button onClick={() => dispatch({ type: "nextQuestion" })}>Next</Button>
    );
  }

  if (index === numQuestions - 1) {
    return <Button onClick={() => dispatch({ type: "finish" })}>Finish</Button>;
  }
};

export default NextButton;
