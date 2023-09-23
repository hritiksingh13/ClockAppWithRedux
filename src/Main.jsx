import Clock from "./Pages/Clock";
import "./Main.css";
import { useEffect, useState } from "react";
import StopWatch from "./Pages/StopWatch";
import Timer from "./Pages/Timer";
import { useDispatch, useSelector } from "react-redux";
import {
  setTimerMilliSeconds,
  setTimerMinutes,
  setTimerSeconds
} from "./Store/ClockStore";

const Main = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    if (timer.isTimerStarted) {
      setTimeout(() => {
        if (timer.milliSeconds < 99) {
          dispatch(setTimerMilliSeconds(timer.milliSeconds + 1));
        } else {
          dispatch(setTimerMilliSeconds(0));
          dispatch(setTimerSeconds(timer.seconds + 1));
          if (timer.seconds > 59) {
            dispatch(setTimerSeconds(0));
            dispatch(setTimerMinutes(timer.minutes + 1));

            if (timer.minutes > 59) {
              dispatch(setTimerMinutes(0));
            }
          }
        }
      }, 10);
    }
  });
  return (
    <>
      {
        {
          0: <Clock />,
          1: <StopWatch />,
          2: null
        }[pageNo]
      }
      <div className="footer">
        <div
          onClick={() => {
            setPageNo(0);
          }}
        >
          <p>🕗</p>
        </div>
        <div
          onClick={() => {
            setPageNo(1);
          }}
        >
          <p>⏱️</p>
        </div>
      </div>
    </>
  );
};

export default Main;
