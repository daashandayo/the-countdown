// Code referenced from below cited source
// Siva Charan - https://stackoverflow.com/a/9335296

var end = new Date("10/25/2021 00:0 AM");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown_timer").innerHTML = "Did you acheive your Goals?";
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance) / _hour);
  var minutes = Math.floor((distance) / _minute);
  var seconds = Math.floor((distance) / _second);

  var countdownTimerEle = document.getElementById("countdown_timer");

  var content = `
    <div class="days">Days    : ${days}</div>
    <div class="hrs"><strong>Hours   : ${hours}</strong></div>
    <div class="mins">Minutes : ${minutes}</div>
    <div class="secs">Seconds : ${seconds}</div>
  `;
  countdownTimerEle.innerHTML = content;
}

timer = setInterval(showRemaining, 1000);
