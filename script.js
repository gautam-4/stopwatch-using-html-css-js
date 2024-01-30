const date = new Date();
let timeIntervalID;
let time;
let running = false;
setStopwatch();
updateStopwatch();

function setStopwatch(){
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    updateStopwatch();
}

function updateStopwatch(){
    let minutes = date.getMinutes().toString().padStart(2,0);
    let seconds = date.getSeconds().toString().padStart(2,0);
    let milliseconds = (date.getMilliseconds()/10).toString().padStart(2,0);
    let stopwatchString = (`${minutes}:${seconds}:${milliseconds}`);
    document.getElementById("stopwatch").textContent = stopwatchString;
    return stopwatchString;
}

function startStopwatch(){
    if(running===true){return}
    running = true;
    timeIntervalID = setInterval(()=>{date.setTime(date.getTime()+10);
                                        updateStopwatch();
                                     },10);
}

function pauseStopwatch(){
    if(running===false){return}
    running = false;
    clearInterval(timeIntervalID);
}

function flagTime(){
    document.getElementById("clearBTN").hidden = false;
    let div = document.createElement("div");
    div.textContent = updateStopwatch();
    document.getElementById("time-stamps").append(div);
}

function clearTimeStamps(){
    document.getElementById("time-stamps").innerHTML = "";
    document.getElementById("clearBTN").hidden = true;
}