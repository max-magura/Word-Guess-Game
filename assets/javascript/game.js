var wins = 0;
var guesses = 10;
var guessesLettersArray = [];
var guessesLettersArrayObject;

var wins = document.getElementById("wins");
var guesses = document.getElementById("guesses-number");
var guessesLettersArrayObject = document.getElementById("guesses-letters");
var currentWordArrayObject = document.getElementById("current-word");

var wordChoices = [ "michael", "dwight", "scranton", "jim", "pam", "creed", "jan", "ryan", "oscar", "erin", "andy", "beets", "bears", "angela", "meredith", "stanley", "sabre", "dunder", "mifflin", "daryl", "kelly", "toby", "kevin", "tots", "dundies", "athlead", "surplus", "stutter", "benihana", "bankruptcy"
];

var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

var currentWordArray = [];
var currentWordArrayObject

document.onkeyup = function(event) {

  var userGuess = event.key;
  console.log (currentWord)

  //fill in the current word with spaces for the current word letters//
    for (var i = 0; i < currentWord.length; i++) {
      currentWordArray[i] = "_";
    }

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

      for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === userGuess) {
        currentWordArray[j] = userGuess;
        guesses--;
        }

        else {
          guessesLettersArray.push(userGuess);
        }

      }
    }

    if (currentWord === wordChoices) {
      wins++
    }

  wins.textContent = wins;
  guesses.textContent = guesses;
  guessesLettersArrayObject.textContent = guessesLettersArray;
  currentWordArrayObject.textContent = currentWordArray;

}