const express = require('express');
let app = express();

app.get('/', (req, res, next) => {
    res.send("Hello from the web server side...");
});

app.listen(3000);

// app.use(express.static(path.join(__dirname, 'public')));