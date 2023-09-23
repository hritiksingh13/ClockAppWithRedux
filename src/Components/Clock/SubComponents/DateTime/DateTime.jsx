import React from "react";
import "./index.css";
const DateTime = ({ dateTime }) => {
  const time = `${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds} ${dateTime.ampm}`;
  const date = `${dateTime.date}/${dateTime.month}/${dateTime.year}`;
  return (
    <div className="dateTime">
      <h2 className="heavy">{time}</h2>
      <p>{date}</p>
    </div>
  );
};

export default DateTime;
