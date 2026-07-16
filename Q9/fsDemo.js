const fs = require("fs");

// 1. Create and write to a file
fs.writeFileSync("demo.txt", "Welcome to Node.js FS Module");
console.log("File created successfully!");

// 2. Read the file
const data = fs.readFileSync("demo.txt", "utf8");
console.log("File Content:", data);

// 3. Append data to the file
fs.appendFileSync("demo.txt", "\nThis is appended text.");
console.log("Data appended successfully!");

// 4. Rename the file
fs.renameSync("demo.txt", "newdemo.txt");
console.log("File renamed successfully!");

// 5. Check if file exists
if (fs.existsSync("newdemo.txt")) {
    console.log("File exists.");
}

// 6. Get file information
const stats = fs.statSync("newdemo.txt");
console.log("File Size:", stats.size, "bytes");

// 7. Delete the file
fs.unlinkSync("newdemo.txt");
console.log("File deleted successfully!");