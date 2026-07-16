// Loads the function from chatbot.js
const chatbot = require("./chatbot");

// readline is a built-in Node.js module used to read user input from the terminal.
const readline = require("readline");

// This connects the keyboard (input) and terminal (output).
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function(answer):-
    // It is a callback function.
    // A callback function is a function that is passed as an argument to another function and is executed later. The parameter answer stores the text entered by the user, and this value can then be processed inside the function.

    // rl.question() asks the user for input.
    // Since the program has to wait for the user to type something, Node.js doesn't know the answer immediately.
    // So we give it a callback function: function(answer) {
    //     ...
    // }

    // This function will run after the user enters the input.
r1.question("Enter your question: ", function(answer) {
    // chatbot(answer) calls getReply(answer) inside chatbot.js.
    console.log("Bot: " + chatbot(answer));
    r1.close();
});