const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const newYearDay = "20 oct 2024"

function countdownTimer(){
    console.log("In timer");

    const newYearFDate = new Date(newYearDay);
    const currentTime = new Date();

    const dateDiffInSeconds = (newYearFDate - currentTime)/1000;
    const days = Math.floor(dateDiffInSeconds / 3600 / 24 );
    const hours = Math.floor(dateDiffInSeconds / 3600 ) % 24 ;
    const minutes = Math.floor(dateDiffInSeconds / 60 ) % 60;
    const seconds = Math.floor(dateDiffInSeconds) % 60;

    console.log(days,hours,minutes,seconds);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
}

countdownTimer();

setInterval(countdownTimer,1000);