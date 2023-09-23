const GetDateTime = () => {
  const dateTime = new Date();
  const date = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  return { date, month, year, hours, minutes, seconds };
};

const GetLocalDateTime = () => {
  let { date, month, year, hours, minutes, seconds } = GetDateTime();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  year = Number(year.toString().slice(2));
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return { date, month, year, hours, minutes, seconds, ampm };
};

export default {
  GetDateTime,
  GetLocalDateTime
};
