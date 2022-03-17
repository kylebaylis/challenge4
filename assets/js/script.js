// time in timer at start
var timeRemain = 60;

// timer start number
var timer = document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";

// create initial start button
var toStart = document.getElementById("game").innerHTML = "<button id='startGame'>Start</button>";

// for addEventListener to get button id
var startButton = document.getElementById("startGame");


// main game code
var codeGame = function() {
    // window.alert(""); // test code to see if function and click work - it does
    // decrease time by one on button click (needs to be every second)
    timeRemain = timeRemain - 1;
    timer = document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";
}

// to click start to begin the game
startButton.addEventListener("click", codeGame); 


