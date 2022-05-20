const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log("Launched.")
    res.send(`
    <!DOCTYPE html>
    <html lane="en">
    <head>
        <title>Raspberry Pi</title>
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    </head>
    <body style="background-color:#f7f754;">
        <div style="font-family: 'Montserrat', serif;">I have a fucking website!</div>
        <div style="font-family: 'Montserrat', serif;">- Tim Spencer</div>
    </body>
    </html>
    `);
});

app.listen(8080, () => console.log("https://localhost:8080"))
