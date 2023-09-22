import React, { useEffect } from "react";

const Timer = ({ secondsRemaining, dispatch }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    // unmounting
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1 className="rounded-full bg-[#3F474C] px-8 py-3 text-xl">
        {mins < 10 && 0}
        {mins} : {seconds < 10 && 0}
        {seconds}
      </h1>
    </>
  );
};

export default Timer;
