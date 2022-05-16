const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log("Launched.")
    res.send(`
    <!DOCTYPE html>
    <html lane="en">
    <head>
        <title>Raspberry Pi</title>
    </head>
    <body style="background-color:yellow;">
        <h1>Welcome hello</h1>
    </body>
    </html>
    `);
});

app.listen(5000, () => console.log("https://localhost:5000"))
