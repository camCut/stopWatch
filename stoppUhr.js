//settign up variables

var time = 0;
var running = false;
var startTime;

//filling JsToHtml span element in html with input

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

// adding pause function and restrict counter to 1 digit after the comma
setInterval(function() {
    if (running){
        totalTime = Date.now() - startTime + time;
        jsToHtml.textContent = (totalTime / 1000).toFixed(1);
    }
}, 100);


// Reset button
document.getElementById('clearButton').addEventListener('click', function() {
    if (!running) {
      time = 0;
      JsToHtml.textContent = '0';
    }
  });