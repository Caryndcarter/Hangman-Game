function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

window.onload = function(){

	
}

var animalWords = [
	"GIRAFFE",
	"ZEBRA",
	"LION",
	"RHINOCEROS",
	"ELEPHANT",
	"TIGER",
	"CHIMPANZEE"
	];

var animal = "";
var currentAnimal = "";
var wins = 0;
var losses = 0;
var numGuessesLeft = 9;
var lettersAlreadyGuessed =[];
var letterGuess = "";
var currentAnimalLetters=[];
var buildAnimal = [];
var won = ""; 

/*1. startGame ();
		set numGuessesLeft to 9
		set lettersAlreadyGuessed array to blank/zero
		choose currentAnimal from the animalWords array at random
		make the currentAnimal an array of currentAnimalLetters
		display blanks for currentAnimal's letters as buildAnimal array*/
	
function startGame (){
	buildAnimal= [];
	lettersAlreadyGuessed = [];
	numGuessesLeft = 9;
	won = ""; 
	document.getElementById("numberLeft").innerHTML = ("Guesses Left: " +numGuessesLeft);
	document.getElementById("lettersGuessed").innerHTML = (lettersAlreadyGuessed);	

	currentAnimal = animalWords[(Math.floor(Math.random()* 6) +1)];

	currentAnimalLetters = currentAnimal.split("");

	for (var i = 0; i < currentAnimal.length; i++) {
		buildAnimal.push("_ ");
    }
	
	document.getElementById("animal").innerHTML = buildAnimal.join(" ");
}

/*	2. document.onkeyup (); takeInLetter
		take in letterGuess from user and store it
		compare letterGuess to letters in currentAnimalLetters--get index number if identical
		push letterGuess into index-number of buildAnimal array if correct OR 
		push letterGuess into lettersAlreadyGuessed array 
		and reduce numGuessesLeft by one */

function checkLetters () {

	for (var i = 0; i < currentAnimalLetters.length; i++) {
		if (letterGuess === currentAnimalLetters[i]) {
			buildAnimal[i] = letterGuess;
			document.getElementById("animal").innerHTML = buildAnimal.join(" ");
			var letterHere = true; 
		}
	}

	if (letterHere !== true) {
		numGuessesLeft --;
		document.getElementById("numberLeft").innerHTML = ("Guesses Left: " +numGuessesLeft);
		lettersAlreadyGuessed.push(letterGuess);
		document.getElementById("lettersGuessed").innerHTML += (letterGuess + " ");	
		}
	

	if (currentAnimalLetters.join("") === buildAnimal.join("")) {
		wins ++;
		document.getElementById("animal").innerHTML = buildAnimal.join(" ")	
		document.getElementById("wins").innerHTML = ("Wins: " +wins);
		won = true; 
	}

	else if (numGuessesLeft === 0) {
		losses ++;
		document.getElementById("losses").innerHTML = ("Losses: " +losses);
		document.getElementById("numberLeft").innerHTML = ("Guesses Left: " +numGuessesLeft);
		won = false;
	}
}

/*	3.  compareWords ();
	compare currentAnimalLetters array to buildAnimal array and alert "You Win!" if correct, "You have no more guesses." 
	If incorrect, increment wins if numGuessesLeft ===0, alert "You have no more guesses. Game over." and increment losses*/

function compareWords () {
		
	 if (won === true) {
		alert("You win!");
		startGame();
 		

	} else if (won === false) {
		alert("No more guesses. Game Over!"); 
		startGame();
		}
}

startGame();

document.onkeyup = function () {
	letterGuess = String.fromCharCode(event.keyCode).toUpperCase(); 
	checkLetters();
	compareWords();
}


/* 	Pseudo Code

General Steps:
	1. set numGuessesLeft to 9
	2. set lettersAlreadyGuessed array to blank/zero
	3. choose a currentAnimal from the animalWords array at random 
	4. make the currentAnimal an array of currentAnimalLetters
	5. display blanks for that animal's letters as buildAnimal array
	6. take in letterGuess from user
	7. compare letterGuess to letters in currentAnimalLetters--get index number if identical
	8. push letterGuess into index-number of buildAnimal array if correct OR 
		push letterGuess into lettersAlreadyGuessed array and reduce numGuessesLeft by one
	9. compare currentAnimalLetters array to buildAnimal array and alert "You Win!" 
		if correct, "You have no more guesses." if incorrect.
	10. increment wins or losses accordingly 
	11. if numGuessesLeft ===0, alert "You have no more guesses. Game over."
	12. restart game if the user selects letters again

Functions: 
	1. startGame ();
		set numGuessesLeft to 9
		set lettersAlreadyGuessed array to blank/zero
		choose currentAnimal from the animalWords array at random
		make the currentAnimal an array of currentAnimalLetters
		display blanks for currentAnimal's letters as buildAnimal array
	2. document.onkeyup (); takeInLetter
		take in letterGuess from user and store it
		compare letterGuess to letters in currentAnimalLetters--get index number if identical
		push letterGuess into index-number of buildAnimal array if correct OR 
			push letterGuess into lettersAlreadyGuessed array and reduce numGuessesLeft by one
	3. compareWords ();
		compare currentAnimalLetters array to buildAnimal array and alert "You Win!" 
			if correct, "You have no more guesses." if incorrect.
		increment wins 
		if numGuessesLeft ===0, alert "You have no more guesses. Game over." increment losses
	4. restartGame ();
		if numGuessesLeft === 0 OR currentAnimalLetters === buildAnimal,
		restart Game > startGame();
		*/