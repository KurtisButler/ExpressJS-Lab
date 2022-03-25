const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { next } = require("process");
const res = require("express/lib/response");
let app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/formsubmissions", (req, res) => {
    let credentials = { email: req.body.email, password: req.body.name };
    let data = JSON.stringify(credentials)

    fs.writeFile("./credentials.json", data, (err) => {
        if (err) throw err;
        console.log('successful')
    });
       
        res.send("Thank you for submitting your contact form!");
    
});

    // Middleware Logger
    app.use((req, res, next) => {
        fs.appendFileSync("log.txt", `${req.url}\n`);
        next();
    });

    app.use(express.static(path.join(__dirname, "../public")));

    app.listen(3000);
