// The question has two parts:

//     Part 1: Promisify fs.unlink

//     fs.unlink() is a callback-based function.

//     Syntax:
//         fs.unlink("file.txt", function(err) {
//         });

//     The question asks you to convert this callback function into a Promise-based function.

//     For this, Node.js provides:
//     util.promisify()

//     Part 2: Call it

//     After converting it into a Promise, call the function to delete a file.

//     fs.unlink() is used to delete a file.
//     Example:
//     Before:
//         Project
//         │── example.txt
//         │── delete.js

//     After running:
//         Project
//         │── delete.js

//     example.txt is deleted.

const fs = require("fs");
const util = require("util");

// Convert callback function into Promise function
const unlinkFile = util.promisify(fs.unlink);

// Call the Promise function
unlinkFile("example.txt")
    .then(() => {
        console.log("File deleted successfully");
    })
    .catch((err) => {
        console.log("Error: ", err);
    })