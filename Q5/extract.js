const fs = require("fs");
const zlib = require("zlib");

const input = fs.createReadStream("example.txt.gz");
const output = fs.createWriteStream("example.txt");

// createGunzip() decompresses the Gzip data.
input.pipe(zlib.createGunzip()).pipe(output);

console.log("File extracted successfully");