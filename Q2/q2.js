const express = require("express");

const app = express();

// Serve all files inside the public folder
app.use(express.static("public"));

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});