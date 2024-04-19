let isRunning = false;
let startTime = 0;
let intervalId = null;

function startStop() {
  if (isRunning) {
    clearInterval(intervalId);
    document.getElementById("startStop").textContent = "Start";
  } else {
    if (startTime === 0) {
      startTime = Date.now();
    } else {
      startTime += Date.now() - pauseTime;
    }
    intervalId = setInterval(updateTime, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(intervalId);
  document.getElementById("startStop").textContent = "Start";
  isRunning = false;
  startTime = 0;
  updateTime();
}

let pauseTime = 0;

function updateTime() {
  if (startTime === 0) {
    document.getElementById("display").textContent = "00:00.00";
    return;
  }
  const elapsedTime = Date.now() - startTime;
  const minutes = String(Math.floor(elapsedTime / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(
    2,
    "0"
  );
  const milliseconds = String(Math.floor(elapsedTime % 1000)).padStart(3, "0");
  document.getElementById(
    "display"
  ).textContent = `${minutes}:${seconds}.${milliseconds}`;
  pauseTime = Date.now();
}
