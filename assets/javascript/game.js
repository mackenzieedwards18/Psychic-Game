
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var soFar = [];
var letterToGuess = null;

document.onkeyup = function(event) {

    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var userGuess = event.key;

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            soFar = [];
        }

        if (userGuess != computerGuess) {
        guessesLeft --;
        soFar.push(userGuess);
        }

        if (guessesLeft === 0) {

            guessesLeft = 9;
            losses ++;
            soFar = [];
        }


    }

    var html =

    "<p>Wins: " + wins + "</p>" +
                
    "<p>Losses: " + losses + "</p>" +

    "<p>Guesses Left: " + guessesLeft + "</p>" +
    
    "<p>Your Guesses so far: " + soFar.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;






}



