function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("digitalClock").textContent = timeString;
}

document.addEventListener("DOMContentLoaded", function() {
    updateClock();
    setInterval(updateClock, 1000);
})
