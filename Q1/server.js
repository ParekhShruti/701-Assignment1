const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //Route for HTML page
    if(req.url == "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });
    }

    //Route for AJAX request(/gethello)
    else if(req.url == "/gethello" && req.method == "GET") {
        res.writeHead(200, { "content-type": "text/plain"});
        res.end("Hello NodeJS!!");
    }

    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})