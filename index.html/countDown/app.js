const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const lottery = document.querySelector('.lottery');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-item h4');


//let futureDate = new Date(2021, 7, 4, 18, 18, 0);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10,11,30,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

let weekday = weekdays[futureDate.getDay()];



lottery.textContent = `lottery ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;


const futerTime = futureDate.getTime();


function getRemainingTime(){
 const today = new Date().getTime();
 const t =   futerTime  -today ;
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);

const values = [days, hours, minutes, seconds];

function format (item){
  if ( item < 10){
    return (item = `0${item}`);
  }
  return item;
}
items.forEach(function(item,index){
 item.innerHTML = format(values[index]);
});
if(t< 0){
  clearInterval(countDown);
  deadline.innerHTML= `<h4 class = "expired">sory,this lottery has end</h4>`
}

}
let countDown = setInterval(getRemainingTime,1000);

getRemainingTime();