//smallStick = document.getElementById("small");
longStick = document.getElementById("long");
longestStick = document.getElementById("longest");

let date = new Date();
let hour = 0;
let minute = 0;
let second = 0

setInterval(
    function() {
        date = new Date();
        second = date.getSeconds() * 6;
        minute = date.getMinutes() * 6;
        hour = date.getHours() * 30;
        document.getElementById("seconds-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000 
);
 