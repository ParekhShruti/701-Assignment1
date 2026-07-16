const fs = require("fs");
const zlib = require("zlib");

// Reads the contents of sample.txt
const input = fs.createReadStream("example.txt");

// Creates a new compressed file named sample.txt.gz
const output = fs.createWriteStream("example.txt.gz");

// pipe() means:
//     Take the output from one stream and send it to another stream.

//     Imagine a water pipe.
//         Tank  ─────────► Pipe ─────────► Bucket
//     Read Stream ─────────► Write Stream

// createGzip() is a compression stream.
// It compresses the incoming data.
input.pipe(zlib.createGzip()).pipe(output);

console.log("File compressed successfully");