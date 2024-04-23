#! /usr/bin/env node
// This line is called a Shebang , it tells the OR to run it with Node.js
//Import the "inquirer" module, whish is a command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant "answers" and assign it to the result of inquirer.prompt function.//
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
]);
const words = answers.Sentence.trim().split(" ");
//Print the array of words to the console //
console.log(words);
//Print the word count of the sentence to the console//
console.log(`Your Sentence Word Count Is ${words.length}`);
