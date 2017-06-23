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

        // flashCardBasicFive();
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
flashCardBasicOne();


// Create instances from ClozeCard Constructor && set parameters
var clozeOne = new ClozeCard("George Washington was the First President of the United States", "George Washington");

// Testing ClozeCard Construct -WORKING!
console.log(clozeOne.fullText);
console.log(clozeOne.cloze);
console.log(clozeOne.partial);


// inquirer.prompt([
// 	{	
// 	name: "clozeOne",
// 	message: 
// 	}, {

// 	},




// ]).then(function(answers){


// });
