// function ready(fn) {
//   if (document.readyState != 'loading'){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }

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

/*1. startGame ();
		set numGuessesLeft to 9
		set lettersAlreadyGuessed array to blank/zero
		choose currentAnimal from the animalWords array at random
		make the currentAnimal an array of currentAnimalLetters
		display blanks for currentAnimal's letters as buildAnimal array*/
	

function startGame (){
	numGuessesLeft = 9;
	lettersAlreadyGuessed = [];
	buildAnimal= [];

	currentAnimal = animalWords[(Math.floor(Math.random()* 6) +1)];
		console.log(currentAnimal);

	currentAnimalLetters = currentAnimal.split("");
		console.log(currentAnimalLetters);

	for (var i = 0; i < currentAnimal.length; i++) {
		buildAnimal.push("_ ");
	}
		console.log(buildAnimal);
		console.log(buildAnimal.join(" "));

	document.getElementById("animal").innerHTML = buildAnimal.join(" ");
}
startGame();

/*	2. document.onkeyup (); takeInLetter
		take in letterGuess from user and store it
		compare letterGuess to letters in currentAnimalLetters--get index number if identical
		push letterGuess into index-number of buildAnimal array if correct OR 
		push letterGuess into lettersAlreadyGuessed array and reduce numGuessesLeft by one */

document.onkeyup = function () {
	letterGuess = String.fromCharCode(event.keyCode).toUpperCase(); 
	console.log(letterGuess);
	
	for (var i = 0; i < currentAnimalLetters.length; i++) {
		if (letterGuess === currentAnimalLetters[i]) {
			buildAnimal[i] = letterGuess;
			document.getElementById("animal").innerHTML = buildAnimal.join(" ");
				console.log(buildAnimal);
			var letter = true; 
		}
	}

	if (letter !== true) {
		lettersAlreadyGuessed.push(letterGuess);
			console.log("previous letters", lettersAlreadyGuessed);
		document.getElementById("lettersGuessed").innerHTML += (letterGuess + " ");	
		numGuessesLeft --;
		document.getElementById("numberLeft").innerHTML = (numGuessesLeft);
			console.log(numGuessesLeft);
		}
	
}






/* 	General Steps:

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
		restart Game > startGame();*/


