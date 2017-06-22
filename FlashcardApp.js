

var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");

var ClozeCard = require("./ClozeCard.js");


// Create instances from Basic Card Constructor && Insert .front and .back parameters

var cardOne = new BasicCard("How many bones compose the human body?", "206");
var cardTwo = new BasicCard("The fall of the Western Roman Empire is attributed to this year", "What is 476 AD");
var cardThree = new BasicCard("Question ", "Answer");
var cardFour = new BasicCard("Question ", "Answer");
var cardFive = new BasicCard("Question ", "Answer");


// Log Respective card information to Test

console.log(cardOne.front);
console.log(cardOne.back);

// Use recursion and inquierer to display card fronts and back.

var count = 0;

var flashCardBasic = function(){

	if(count < 3){

		inquirer.prompt([
		{
			name: "cardOne",
			message: cardOne.front
		}, {
			name: "cardTwo",
			message: cardTwo.front
		}
			]).then(function(answers){

				console.log(cardOne.back);

				count ++;

				flashCardBasic();
			});

	}
	else{
		console.log("Cards_Finished");
	}
};

flashCardBasic();

// Creaet instances from ClozeCard Constructor && set parameters





// inquirer.prompt([
// 	{	
// 	name: "clozeOne",
// 	message: 
// 	}, {

// 	},




// ]).then(function(answers){


// });