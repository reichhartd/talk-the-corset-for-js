import express from 'express';

const app = express();
let port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listening for connections
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
