import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTimer,
  setTimerMilliSeconds,
  setTimerMinutes,
  setTimerSeconds,
  toggleIsTimerStarted
} from "../../Store/ClockStore";
import "./index.css";
const Index = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  let stopwatch = `${
    timer.minutes > 9 ? timer.timer.minutes : `0${timer.minutes}`
  }:${timer.seconds > 9 ? timer.seconds : `0${timer.seconds}`}.${
    timer.milliSeconds > 9 ? timer.milliSeconds : `0${timer.milliSeconds}`
  }`;
  const startWatch = () => {
    dispatch(toggleIsTimerStarted(true));
  };
  const stopWatch = () => {
    dispatch(toggleIsTimerStarted(false));
  };
  const reset = () => {
    dispatch(resetTimer());
  };
  return (
    <>
      <div className="stopwatch">
        <div className="timer">{stopwatch}</div>
        <div className="control">
          <button
            className={timer.isTimerStarted ? "disabled" : ""}
            onClick={startWatch}
          >
            Start
          </button>
          <button
            className={!timer.isTimerStarted ? "disabled" : ""}
            onClick={stopWatch}
          >
            Stop
          </button>
          <button
            disabled={timer.isTimerStarted}
            className={timer.isTimerStarted ? "disabled" : ""}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
