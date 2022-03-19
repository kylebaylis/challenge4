// time in timer at start
var timeRemain = 30;

// timer start number
var timer = document.getElementById("time").innerHTML = "<p>" + timeRemain + "</p>";

// create initial start button
var toStart = document.getElementById("game").innerHTML = "<button id='startGame' class='startGame'>Start</button>";

// for addEventListener to get button id
var startButton = document.getElementById("startGame");

// take time off for clicking wrong answer
var wrongAns = function() {
    if (timeRemain >= 10) {
        timeRemain -= 10;
    }
    else {
        timeRemain -= timeRemain;
    }
}

// main game code
var codeGameStart = function() {
    // timer
    var startCount = function() {
        if (timeRemain <= -1) {
        clearInterval(startCount);
        return;
    }
        document.getElementById("time").innerHTML = "<p>" + [timeRemain - 1] + "</p>";
        timeRemain -= 1;     
        if (timeRemain === -1) {
            // game over screen
            toStart = document.getElementById("game").innerHTML = 
            "<p class='gameQues'>Game over! Better luck next time.</p>";
        }
    }
    setInterval(startCount, 1000);
        
    // to begin game
    if (codeGameStart) {
        toStart = document.getElementById("game").innerHTML = 
        "<p class='gameQues'>Question 1: Commonly used data types do NOT include:</p>" +
        "<button id='onePickOne' class='gameBtn'>Strings</button>" +
        "<button id='onePickTwo' class='gameBtn'>Booleans</button>" +
        "<button id='onePickThree' class='gameBtn'>Alerts</button>" +
        "<button id='onePickFour' class='gameBtn'>Numbers</button>";
        
        // if question one is right
        var oneRightAnsClick = function() {
            toStart = document.getElementById("game").innerHTML = 
            "<p class='gameQues'>Question 2: The condition in an if/else statenent is enclosed with:</p>" +
            "<button id='twoPickOne' class='gameBtn'>Quotes</button>" +
            "<button id='twoPickTwo' class='gameBtn'>Parenthesis</button>" +
            "<button id='twoPickThree' class='gameBtn'>Curly Brackets</button>" +
            "<button id='twoPickFour' class='gameBtn'>Square Brackets</button>";

            var rightAns2 = document.getElementById("twoPickTwo");
            rightAns2.addEventListener("click", twoRightAnsClick);

            // if wrong answer is clicked for question 2 (to take time off)
            var twoWrongAns1 = document.getElementById("twoPickOne");
            twoWrongAns1.addEventListener("click", wrongAns);
            var twoWrongAns2 = document.getElementById("twoPickThree");
            twoWrongAns2.addEventListener("click", wrongAns);
            var twoWrongAns3 = document.getElementById("twoPickFour");
            twoWrongAns3.addEventListener("click", wrongAns);
        }

        // if question two is right
        var twoRightAnsClick = function() {
            toStart = document.getElementById("game").innerHTML = 
            "<p class='gameQues'>Question 3: Arrays in JavaScript can be used to store:</p>" +
            "<button id='threePickOne' class='gameBtn'>Numbers and Strings</button>" +
            "<button id='threePickTwo' class='gameBtn'>Other Arrays</button>" +
            "<button id='threePickThree' class='gameBtn'>Booleans</button>" +
            "<button id='threePickFour' class='gameBtn'>All of the above</button>";

            var rightAns3 = document.getElementById("threePickFour");
            rightAns3.addEventListener("click", threeRightAnsClick);
        }

        // if all three are right - win screen
        var threeRightAnsClick = function() {
            toStart = document.getElementById("game").innerHTML = 
            "<p class='gameQues'> You win! Your score is " + timeRemain.toString(); + "</p>";
            // place to enter initials and save high score
        }
        
        var rightAns1 = document.getElementById("onePickThree");
        rightAns1.addEventListener("click", oneRightAnsClick);

        // if wrong answer is clicked for question 1 (to take time off)
        var oneWrongAns1 = document.getElementById("onePickOne");
        oneWrongAns1.addEventListener("click", wrongAns);
        var oneWrongAns2 = document.getElementById("onePickTwo");
        oneWrongAns2.addEventListener("click", wrongAns);
        var oneWrongAns3 = document.getElementById("onePickFour");
        oneWrongAns3.addEventListener("click", wrongAns);
    }
}
// to click start to begin the game
var gameBegin = startButton.addEventListener("click", codeGameStart); 


