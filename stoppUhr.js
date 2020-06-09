var time = 0;
var running = false;
var startTime;


jsToHtml = document.getElementById('jsToHtml');
document.getElementById('startStopButton').addEventListener('click', function() {
    if (!running) {
        startTime = Date.now();
        running = true;
    }
    else {
        time += Date.now() - startTime;
        running = false;
    }
});

setInterval(function() {
    if (running){
        totalTime = Date.now() - startTime + time;
        jsToHtml.textContent = (totalTime / 1000).toFixed(1);
    }
}, 100);



document.getElementById('clearButton').addEventListener('click', function() {
    if (!running) {
      time = 0;
      JsToHtml.textContent = '0';
    }
  });