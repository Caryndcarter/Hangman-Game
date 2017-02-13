var animalWords = [
	"giraffe",
	"zebra",
	"lion",
	"rhinoceros",
	"elephant",
	"tiger",
	"chimpanzee"
	]

var animal;
var currentAnimal;
var wins = 0;
var losses = 0;
var numGuessesLeft = 9;
var lettersAlreadyGuessed =[];
var letterGuess;
var chosenAnimalLetters=[];
var buildWord = [];

/* 	General Steps:

	1. set numGuessesLeft to 9
	2. set lettersAlreadyGuessed array to blank/zero
	3. choose a currentAnimal from the animalWords array at random 
	4. make the currentAnimal an array of chosenAnimalLetters
	5. display blanks for that animal's letters as buildWord array
	6. take in letterGuess from user
	7. compare letterGuess to letters in chosenAnimalLetters--get index number if identical
	8. push letterGuess into index-number of buildWord array if correct OR 
		push letterGuess into lettersAlreadyGuessed array and reduce numGuessesLeft by one
	9. compare chosenAnimalLetters array to buildWord array and alert "You Win!" 
		if correct, "You have no more guesses." if incorrect.
	10. increment wins or losses accordingly 
	11. if numGuessesLeft ===0, alert "You have no more guesses. Game over."
	12. restart game if the user selects letters again


Functions: 
	1. startGame ();
		set numGuessesLeft to 9
		set lettersAlreadyGuessed array to blank/zero
		choose currentAnimal from the animalWords array at random
		make the currentAnimal an array of chosenAnimalLetters
		display blanks for currentAnimal's letters as buildWord array
	
	2. document.onkeyup (); takeInLetter
		take in letterGuess from user and store it
		compare letterGuess to letters in chosenAnimalLetters--get index number if identical
		push letterGuess into index-number of buildWord array if correct OR 
			push letterGuess into lettersAlreadyGuessed array and reduce numGuessesLeft by one

	3. compareWords ();
		compare chosenAnimalLetters array to buildWord array and alert "You Win!" 
			if correct, "You have no more guesses." if incorrect.
		increment wins 
		if numGuessesLeft ===0, alert "You have no more guesses. Game over." increment losses

	4. restartGame ();
		if numGuessesLeft === 0 OR chosenAnimalLetters === buildWord,
		restart Game > startGame();

