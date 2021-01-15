'use strict'

let hour = 0;
let minute = 0;
let second = 0;

let cronometro;

function start() {
  cronometro = setInterval(() => {
    timer();
  }, 1000);
}

function pause() {
  clearInterval(cronometro);
}

function stop() {
  clearInterval(cronometro);

  hour = 0;
  minute = 0;
  second = 0;
}

function timer() {
  second++;

  if (second == 60) {
    second = 0;
    minute++;

    if (minute == 60) {
      hour++;
    }
  }

  let formatHour = (hour < 10 ? '0' + hour : hour);
  let formatMinute = (minute < 10 ? '0' + minute : minute);
  let formatSecond = (second < 10 ? '0' + second : second);

  document.querySelector('#hour').innerText = formatHour;
  document.querySelector('#minute').innerText = formatMinute;
  document.querySelector('#second').innerText = formatSecond;
}