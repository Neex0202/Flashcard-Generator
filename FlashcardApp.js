var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");

var ClozeCard = require("./ClozeCard.js");


// Create instances from Basic Card Constructor && Insert .front and .back parameters

var cardOne = new BasicCard("How many bones compose the human body?", "206");
var cardTwo = new BasicCard("The fall of the Western Roman Empire is attributed to this year", "What is 476 AD");
var cardThree = new BasicCard("The legendary basketball player, Michael Jordan, was this number pick in the '84 draft", "What is the 3rd pick");
var cardFour = new BasicCard("Pound for pound, these insects are considered the strongest animals on Earth", "What are beetles");
// var cardFive = new BasicCard("The  ", "Answer");


// Log Respective card information to Test -WORKING!
// console.log(cardOne.front);
// console.log(cardOne.back);

var flashCardBasicOne = function() {

    inquirer.prompt([{
        name: "cardOne",
        message: cardOne.front
    }]).then(function(answers) {

        console.log(cardOne.back);

        flashCardBasicTwo();
    });

};

var flashCardBasicTwo = function() {

    inquirer.prompt([{
        name: "cardTwo",
        message: cardTwo.front
    }]).then(function(answers) {

        console.log(cardTwo.back);

        flashCardBasicThree();
    });

};

var flashCardBasicThree = function() {

    inquirer.prompt([{
        name: "cardThree",
        message: cardThree.front
    }]).then(function(answers) {

        console.log(cardThree.back);

        flashCardBasicFour();
    });

};

var flashCardBasicFour = function() {

    inquirer.prompt([{
        name: "cardFour",
        message: cardFour.front
    }]).then(function(answers) {

        console.log(cardFour.back);

        
        // Calling chain of Cloze Card functions after executing flashCardBasicFour function

        flashCardClozeOne();
    });

};


// var flashCardBasicFive = function() {

//     inquirer.prompt([{
//         name: "cardFive",
//         message: cardFive.front
//     }]).then(function(answers) {

//         console.log(cardFive.back);

//         // flashCardBasicFour();
//     });

// };


// Start the Chain of inquirer Functions starting from cardOne
// flashCardBasicOne();


// Create instances from ClozeCard Constructor && set parameters
var clozeOne = new ClozeCard("George Washington was the First President of the United States", "George Washington");
var clozeTwo = new ClozeCard("The Federalists and Democratic Republicans were the first two political parties of the the United States", "Federalists");
var clozeThree = new ClozeCard("During America's colonization, the Iroquois League was compromised by the Mohawk, Onondaga, Oneida, Cayuga, Seneca, and Tuscarora", "Seneca");
var clozeFour = new ClozeCard("George Washington was the First President of the United States", "George Washington");




// Testing ClozeCard Construct -WORKING!
// console.log(clozeOne.fullText);
// console.log(clozeOne.cloze);
// console.log(clozeOne.partial);


var flashCardClozeOne = function() {

    inquirer.prompt([{
        name: "clozeOne",
        message: clozeOne.partial
    }]).then(function(answers) {

    		// Setting variable userAns to user input
    		var userAns = answers.clozeOne;

    		// Setting variable fullUserAnswer to clozed text + user input (replacing ellipse with input)
    		var fullUserAnswer = clozeOne.partial.replace("...", userAns);

        // Conditional to check if answer is correct
        if(clozeOne.fullText == fullUserAnswer){
        	// Displays if fullText matches User Input + this.partial
        	console.log("Correct!");
        	console.log(clozeOne.fullText);
        }else{
        	console.log("Incorrect!");
        	console.log("------------------------------------------------------------------");
        	console.log("The right answer:");
        	console.log(clozeOne.fullText);
        	console.log("------------------------------------------------------------------");
        }

        flashCardClozeTwo();
        
    });

};

var flashCardClozeTwo = function() {

    inquirer.prompt([{
    		type: "input",
        name: "clozeTwo",
        message: clozeTwo.partial
    }]).then(function(answers) {

    		// Setting variable userAns to user input
    		var userAns = answers.clozeTwo;

    		// Setting variable fullUserAnswer
    		var fullUserAnswer = clozeTwo.partial.replace("...", userAns);

        // Conditional to check if answer is correct
        if(clozeTwo.fullText == fullUserAnswer){

        	console.log("Correct!")
        	console.log(clozeTwo.fullText);

        }else{
        	console.log("Incorrect!");
        	console.log("------------------------------------------------------------------");
        	console.log("The right answer:");
        	console.log(clozeTwo.fullText);
        	console.log("------------------------------------------------------------------");
        }

        flashCardClozeThree();
        
    });

};


var flashCardClozeThree = function() {

    inquirer.prompt([{
    		type: "input",
        name: "clozeThree",
        message: clozeThree.partial
    }]).then(function(answers) {

    		// Setting variable userAns to user input
    		var userAns = answers.clozeThree;

    		// Setting variable fullUserAnswer
    		var fullUserAnswer = clozeThree.partial.replace("...", userAns);

        // Conditional to check if answer is correct
        if(clozeThree.fullText == fullUserAnswer){

        	console.log("Correct!")
        	console.log(clozeThree.fullText);

        }else{
        	console.log("Incorrect!");
        	console.log("------------------------------------------------------------------");
        	console.log("The right answer:");
        	console.log(clozeThree.fullText);
        	console.log("------------------------------------------------------------------");
        }

        // flashCardClozeTFour();
        
    });

};


// Starting Chain of functions starting with Basic Flash cards
flashCardBasicOne();
