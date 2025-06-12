import express from "express";
import path from "path";

const server = express();

// ISSUE: Port 3000 doesn't work for some reason. This does though.
const port = 6969;

const __dirname = import.meta.dirname;

server.get("/test", (req, res) => {
    res.send("Ok");
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "index.html"))
})

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "about.html"))
})

server.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "contact-me.html"))
})

server.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, "routes", "404.html"))
})

server.listen(port, () => {
    console.log("Listening to Port: " + port);
})