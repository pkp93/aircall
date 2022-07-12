export const secondsToHms = (d) => {
  // To display time in 00 hours, 00 minutes, 00 seconds format via https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "0 seconds";
  return hDisplay + mDisplay + sDisplay;
};

const pad = (num) => ("0" + num).slice(-2);
export const getTimeFromDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
};

export const getInitialForCard = (text = "") => {
  return (65 <= text.charCodeAt(0) && 90 >= text.charCodeAt(0)) ||
    (97 <= text.charCodeAt(0) && 122 >= text.charCodeAt(0))
    ? text[0]
    : "#";
};
