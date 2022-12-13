const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res, next) => {
    console.log("We received a request for home page");
    res.sendFile(__dirname + "/views/home.html");
})
app.get("/about", (req, res, next) => {
    console.log("We received a request for about page");
    res.sendFile(__dirname + "/views/about.html");
})
app.get("/works", (req, res, next) => {
    console.log("We received a request for works page");
    res.sendFile(__dirname + "/views/works.html");
})
app.listen(3001);