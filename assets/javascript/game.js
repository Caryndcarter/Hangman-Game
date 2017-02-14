var animalWords = [
	"giraffe",
	"zebra",
	"lion",
	"rhinoceros",
	"elephant",
	"tiger",
	"chimpanzee"
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

	currentAnimal = animalWords[(Math.floor(Math.random()* 6) +1)];
		console.log(currentAnimal);

	currentAnimalLetters = currentAnimal.split("");
		console.log(currentAnimalLetters);

	for (var i = 0; i < currentAnimal.length; i++) {
		buildAnimal.push("_ ");
	}
		console.log(buildAnimal);
		console.log(buildAnimal.join(" "));

	// var blanks = document.getElementById("animalInProcess").innerHTML;
	// blanks = buildAnimal.join(" ");
	document.getElementById("animal").innerHTML = buildAnimal.join(" ");
}
startGame();

/*
	2. document.onkeyup (); takeInLetter
		take in letterGuess from user and store it
		compare letterGuess to letters in currentAnimalLetters--get index number if identical
		push letterGuess into index-number of buildAnimal array if correct OR 
			push letterGuess into lettersAlreadyGuessed array and reduce numGuessesLeft by one */





