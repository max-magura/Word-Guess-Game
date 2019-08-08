var wins = 0;
var guesses = 10;
var guessesLettersArray = [];
var guessesLettersArrayObject
var currentWordArray = [] //need to update in real time and in correct place
var currentWordArrayObject

var wordChoices = [ "michael", "dwight", "scranton", "jim", "pam", "creed", "jan", "ryan", "oscar", "erin", "andy", "beets", "bears", "angela", "meredith", "stanley", "sabre", "dunder", "mifflin", "daryl", "kelly", "toby", "kevin", "tots", "dundies", "athlead", "surplus", "stutter", "benihana", "bankruptcy"
]

var wins = document.getElementById("wins");
var guesses = document.getElementById("guesses-number");
var guessesLettersArrayObject = document.getElementById("guesses-letters");
var currentWordArrayObject = document.getElementById("current-word");