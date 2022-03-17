// create initial start button
var toStart = document.getElementById("game").innerHTML = "<button id='startGame'>Start</button>";

// for addEventListener to get button id
var startButton = document.getElementById("startGame");

// main game code?
var codeGame = function() {
    window.alert(""); // test code to see if function and click work - it does
}

startButton.addEventListener("click", codeGame); // to click start to begin the game

