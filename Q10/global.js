// Global Objects in Node.js

console.log("=== Global Objects Demo ===");

// __filename
console.log("File Name:", __filename);

// __dirname
console.log("Directory Name:", __dirname);

// setTimeout()
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

// Read command line arguments
console.log("\n=== Command Line Arguments ===");

const args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("Argument", i - 1 + ":", args[i]);
}