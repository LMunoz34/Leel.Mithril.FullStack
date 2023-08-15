const os = require('os');
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/style.css'));
})

app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/app.js'));
})

app.listen(port, () => {
  console.log(`APP listening at http://localhost:${port}`);
});
