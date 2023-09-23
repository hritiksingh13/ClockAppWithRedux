import React, { useState } from "react";
import AlarmModel from "../AlarmModel/AlarmModel";
import "./index.css";

const AlarmItem = ({
  alarm: { id, hours, minutes, amPm },
  deleteAlarm,
  editAlarm
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const editAlarmItem = (hours, minutes, amPm) => {
    const alarm = { hours, minutes, amPm };
    editAlarm(id, alarm);
  };
  return (
    <div className="alarmItem">
      <div className="alarm">
        {hours}:{minutes}
        <p>{amPm}</p>
      </div>
      <div className="">
        <button
          className="editItem"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          ✎
        </button>
        <button
          className="deleteItem"
          onClick={() => {
            deleteAlarm(id);
          }}
        >
          x
        </button>
      </div>
      <AlarmModel
        header="Edit the Alarm"
        showModel={isEditing}
        hideModel={toggleEditing}
        setAlarmCallback={editAlarmItem}
        alarm={{ hours, minutes, amPm }}
      />
    </div>
  );
};

export default AlarmItem;
