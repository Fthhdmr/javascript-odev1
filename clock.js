//Month
let date_ = Date();
let months = ["Jauary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

//Days
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrushday", "Friday", "Saturday"];

//Define Function for Current Time
function realTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amPm = "";

  amPm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours >= 10 ? hours : '0' + hours;
  minutes = minutes >= 10 ? minutes : '0' + minutes;
  seconds = seconds >= 10 ? seconds : '0' + seconds;

  document.querySelector(".month_").innerHTML = months[time.getMonth()];
  document.querySelector(".day").innerHTML = days[time.getDay()];
  document.querySelector(".date_").innerHTML = time.getDate();
  document.querySelector(".hour_").innerHTML = hours;
  document.querySelector(".min_").innerHTML = minutes;
  document.querySelector(".sec_").innerHTML = seconds;
  document.querySelector(".ampm").innerHTML = amPm;
}
let final_time = setInterval(realTime, 1000);