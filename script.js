window.addEventListener("load", calculateTime);

function calculateTime() {
  var date = new Date();
  var dayNumber = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var ampm = hour >= 12 ? "PM" : "AM";
  var dayNames = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT", "SUN"];

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("ampm").innerText = ampm;

  setTimeout(calculateTime, 200);
}
