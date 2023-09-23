import React, { useEffect, useRef, useState } from "react";
import DateTime from "./SubComponents/DateTime/DateTime";
import AlarmModel from "./SubComponents/AlarmModel/AlarmModel";
import "./index.css";
import AlarmItem from "./SubComponents/AlarmItem/AlarmItem";
import Utils from "../../../Utility/Utils";
import song from "./song.mp3";
import { useDispatch, useSelector } from "react-redux";
import { setAlarmList } from "../../Store/ClockStore";

const Index = () => {
  const audio = useRef(new Audio(song));
  const dispatch = useDispatch();
  const [dateTime, setDateTime] = useState(Utils.GetLocalDateTime());
  const [showAlarm, setShowAlarm] = useState(false);
  const alarmList = useSelector((state) => state.alarmList);
  const [isAlarmExist, setIsAlarmExist] = useState(false);
  const toggleSetAlarm = () => {
    setShowAlarm(!showAlarm);
  };
  const alarmAlert = () => {
    const isAlarm = alarmList.find(
      (alarm) =>
        alarm.hours === dateTime.hours.toString() &&
        alarm.minutes === dateTime.minutes.toString() &&
        alarm.amPm === dateTime.ampm
    );

    if (!isAlarmExist) {
      if (!!isAlarm) {
        setIsAlarmExist(true);
        audio.current.play();
        audio.current.loop = true;
      }
    } else {
      if (!!!isAlarm) {
        audio.current.loop = false;
        setIsAlarmExist(false);
      }
    }
  };
  const createAlarm = (hours, minutes, amPm) => {
    const currentAlarmList = [...alarmList];
    currentAlarmList.push({
      id: crypto.randomUUID(),
      hours: hours,
      minutes: minutes,
      amPm: amPm
    });
    dispatch(setAlarmList(currentAlarmList));
  };
  const deleteAlarm = (id) => {
    let currentAlarmList = [...alarmList];
    currentAlarmList = currentAlarmList.filter((list) => list.id !== id);
    dispatch(setAlarmList(currentAlarmList));
  };
  const editAlarm = (id, alarm) => {
    const currentAlarmList = [...alarmList];
    const updatedAlarmList = currentAlarmList.map((listItem) => {
      if (listItem.id === id) {
        return {
          id,
          ...alarm
        };
      }
      return listItem;
    });
    dispatch(setAlarmList(updatedAlarmList));
  };
  useEffect(() => {
    setTimeout(() => setDateTime(Utils.GetLocalDateTime()), 1000);
    alarmAlert();
  });
  return (
    <>
      <div className="clock">
        <div className="dateAndTime">
          <DateTime dateTime={dateTime} />
        </div>
        <div className="alarmList">
          {alarmList.map((alarm) => {
            return (
              <AlarmItem
                key={alarm.id}
                alarm={alarm}
                deleteAlarm={deleteAlarm}
                editAlarm={editAlarm}
              />
            );
          })}
        </div>
        <button className="addAlarm" onClick={toggleSetAlarm}>
          +
        </button>
        <AlarmModel
          showModel={showAlarm}
          hideModel={toggleSetAlarm}
          setAlarmCallback={createAlarm}
        />
      </div>
    </>
  );
};

export default Index;
