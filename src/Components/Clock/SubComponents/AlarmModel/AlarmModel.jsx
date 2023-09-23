import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./index.css";

const AlarmModel = ({
  header = "Set an alarm",
  showModel,
  hideModel,
  setAlarmCallback,
  alarm = { hours: "Hours", minutes: "Minutes", amPm: "Am/Pm" }
}) => {
  const [hours, setHours] = useState(alarm.hours);
  const [minutes, setMinutes] = useState(alarm.minutes);
  const [amPm, setAmPm] = useState(alarm.minutes);
  const reset = () => {
    setHours("Hours");
    setMinutes("Minutes");
    setAmPm("Am/Pm");
    hideModel();
  };
  const createAlarm = () => {
    if (hours !== "Hours" && minutes !== "Minutes" && amPm !== "Am/Pm") {
      setAlarmCallback(hours, minutes, amPm);
      reset();
    }
  };
  useEffect(() => {
    setHours(alarm.hours);
    setMinutes(alarm.minutes);
    setAmPm(alarm.amPm);
  }, [showModel]);
  return !showModel ? null : (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{header}</h3>
        </div>
        <div className="modal-body">
          <Dropdown
            title="Hours"
            limitValue={12}
            dropDownValue={hours}
            setDropdown={(e) => setHours(e.target.value)}
          />
          <Dropdown
            title="Minutes"
            limitValue={60}
            dropDownValue={minutes}
            setDropdown={(e) => setMinutes(e.target.value)}
          />
          <Dropdown
            dropDownValue={amPm}
            setDropdown={(e) => setAmPm(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="setAlarmButton" onClick={createAlarm}>
            Set Alarm
          </button>
          <button className="setAlarmButton" onClick={reset}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlarmModel;
