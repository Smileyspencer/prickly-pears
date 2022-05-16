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
    <body style="background-color:yellow;">
        <div style="font-family: 'Montserrat', serif;">I think this font is nice.</div>
    </body>
    </html>
    `);
});

app.listen(5000, () => console.log("https://localhost:5000"))
