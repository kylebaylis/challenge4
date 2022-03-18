// time in timer at start
var timeRemain = 60;

// timer start number
var timer = document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";

// create initial start button
var toStart = document.getElementById("game").innerHTML = "<button id='startGame'>Start</button>";

// for addEventListener to get button id
var startButton = document.getElementById("startGame");

// main game code
var codeGameStart = function() {
    // timer
    var startCount = function() {
        if (timeRemain <= -1) {
        clearInterval(startCount);
        return;
    }
        document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";
        timeRemain -= 1;     
        if (timeRemain === -1) {
            window.alert("Game over!");
        }
    }
    setInterval(startCount, 100);
        
    // to begin game
    if (codeGameStart) {
        toStart = document.getElementById("game").innerHTML = 
        "<p>Question 1: Commonly used data types do NOT include</p>" +
        "<button id='onePickOne'>Strings</button>" +
        "<button id='onePickTwo'>Booleans</button>" +
        "<button id='onePickThree'>Alerts</button>" +
        "<button id='onePickFour'>Numbers</button>";
        
        // if question one is right
        var oneRightAnsClick = function() {
            toStart = document.getElementById("game").innerHTML = 
            "<p>Question 2: The condition in an if/else statenent is enclosed with</p>" +
            "<button id='twoPickOne'>Quotes</button>" +
            "<button id='twoPickTwo'>Parenthesis</button>" +
            "<button id='twoPickThree'>Curly Brackets</button>" +
            "<button id='twoPickFour'>Square Brackets</button>";
        }
        var rightAns1 = document.getElementById("onePickThree");
        rightAns1.addEventListener("click", oneRightAnsClick);
    }
}

// to click start to begin the game
var gameBegin = startButton.addEventListener("click", codeGameStart); 


/*
            var rightAns2 = document.getElementById("twoPickTwo");
            rightAns2.addEventListener("click", twoRightAnsClick);

            // if question two is right
            var twoRightAnsClick = function() {
                toStart = document.getElementById("game").innerHTML = 
                "<p>Question 3: The condition in an if/else statenent is enclosed with</p>" +
                "<button id='threePickOne'>Quotes</button>" +
                "<button id='threePickTwo'>Parenthesis</button>" +
                "<button id='threePickThree'>Curly Brackets</button>" +
                "<button id='threePickFour'>Square Brackets</button>";
            }
*/
