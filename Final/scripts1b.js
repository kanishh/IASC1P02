//The javascript clock was taken from flexiple: https://flexiple.com/javascript-clock/ on December 6.


function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();
// API was modified by combining information from two tutorials by The Coding Train youtube channel: Obtained from https://www.youtube.com/watch?v=uxf0--uiX0I&ab_channel=TheCodingTrain and https://www.youtube.com/watch?v=ecT42O6I_WI&ab_channel=TheCodingTrain.
const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=St.%20Catharines&appid=65e9992cafbc4202e34b447831453d67&units=metric'
async function getTemp() {
  const response = await fetch (api_url);
  const data = await response.json();


  console.log(data.main.temp);
  console.log(data.weather[0].description);
  console.log(data.main.feels_like);
  console.log(data.weather[0].icon);


var finalTemp = Math.round(data.main.temp);
var finalFeelsLike = Math.round(data.main.feels_like);


document.getElementById("weatherStatus").innerHTML = data.weather[0].description;
document.getElementById("tempRN").innerHTML = finalTemp;
document.getElementById("feelsLike").innerHTML = finalFeelsLike;

}

getTemp();


//The javascript for scrolling up was taken fropm https://www.w3schools.com/howto/howto_js_scroll_to_top.asp on December 10th, 2021
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

alert("Please Be Kind To Send Astrology/Stargazing Questions and Concerns");
