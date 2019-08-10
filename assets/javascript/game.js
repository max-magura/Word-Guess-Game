var numWins = 0;
var numGuesses = 10;
var guessesLettersArray = [];
var guessesLettersArrayObject;



var currentWordArray = [];
var currentWordArrayObject

wins = document.getElementById("wins");
wins.innerHTML = numWins;
guesses = document.getElementById("guesses-number");
guesses.innerHTML = numGuesses;
guessesLettersArrayObject = document.getElementById("guesses-letters");
currentWordArrayObject = document.getElementById("current-word");

var wordChoices = [ "michael", "dwight", "scranton", "jim", "pam", "creed", "jan", "ryan", "oscar", "erin", "andy", "beets", "bears", "angela", "meredith", "stanley", "sabre", "dunder", "mifflin", "daryl", "kelly", "toby", "kevin", "tots", "dundies", "athlead", "surplus", "stutter", "benihana", "bankruptcy"
  ];  
  
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  
for (var i = 0; i < currentWord.length; i++) {
  currentWordArray[i] = "_";
}


var correctWord = currentWord

document.onkeyup = function game(event) {

  var userGuess = event.key.toLocaleLowerCase();
  console.log (correctWord)
    
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

      for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === userGuess) {
        currentWordArray[j] = userGuess;
        }

      }
      guessesLettersArray.push(userGuess);

      numGuesses--;
    }

    var currentWordString = currentWordArray.join("");
    console.log(currentWordString)
    var correctAnswer = currentWordString

    if (correctAnswer === currentWord) {
      numWins++;
      console.log("yes");
      var winning = true
      numGuesses=10;
      guessesLettersArray=[];
    }

    wins.innerHTML = numWins;
    guesses.innerHTML = numGuesses;
    guessesLettersArrayObject.textContent = guessesLettersArray;
    currentWordArrayObject.textContent = currentWordArray; 
}
