

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

// Format Time
function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`;
}

// Stopwatch Logic
function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

// Start
document.getElementById("startBtn").addEventListener("click", () => {

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);

});

// Pause
document.getElementById("pauseBtn").addEventListener("click", () => {

    clearInterval(timer);

});

// Reset
document.getElementById("resetBtn").addEventListener("click", () => {

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    lapList.innerHTML = "";

});

// Lap
document.getElementById("lapBtn").addEventListener("click", () => {

    let lapTime = display.innerText;

    let li = document.createElement("li");

    li.innerText = `Lap: ${lapTime}`;

    lapList.appendChild(li);

});