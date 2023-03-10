function time() {
    const date = new Date();

const year = date.getFullYear();
const monthNum = date.getMonth();
var month;
const day = date.getDay();


// times
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var am_pm;

if(hour < 10) {
    hour = `0${hour}`;
} else {
    hour = hour;
}

if(min < 10) {
    min = `0${min}`;
} else {
    min = min;
}

if(sec < 10) {
    sec = `0${sec}`;
} else {
    sec = sec;
}


if(hour < 12)  {
    am_pm = "am";
}else if (hour >= 12 && hour < 24) {
    am_pm = "pm";
}

const clockWrapper = document.getElementById("clockWrapper");

switch (monthNum) {
    case 0:
        month = "January";
    break;
    case 1:
        month = "February";
    break;
    case 2:
        month = "March";
    break;
    case 3:
        month = "April";
    break;
    case 4:
        month = "May";
    break;
    case 5:
        month = "June";
    break;
    case 6:
        month = "July";
    break;
    case 7:
        month = "August";
    break;
    case 8:
    month = "September";
    break;
    case 9:
    month = "October";
    break;
    case 10:
    month = "November";
    break;
    case 11:
    month = "December";
    break;

    default:
    month = "In the future.";
    break;
}

const fullDate = `${day}th/${month}/${year}`;

let clock = `
    <span>
            <span class="digit">${hour}</span>

            <span class="col">:</span>

            <span class="digit">${min}</span>

            <span class="col">:</span>

            <span class="digit">${sec}</span>

            <span class="am-pm">${am_pm}</span>
    </span>
    <div class="full-date">${fullDate}</div>
    `;

    clockWrapper.innerHTML = clock;
}

setInterval(() => {
    time();
}, 1000);

