'use strict';
let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');

app.use( bodyParser.json() );                           //JSON
app.use(express.json());                                //JSON
app.use(bodyParser.urlencoded({ extended: true }));     // URL-encoded
app.use(express.urlencoded({ extended: true }));        //URL-encoded

app.use('/front', express.static(path.join(__dirname, '../front/')));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../') });
});

app.get('/read', (req, res) => {
    res.send(fs.readFileSync('../file.txt', 'utf8'));
});

app.get('/clear', (req, res) => {
    fs.writeFileSync('../file.txt', '','utf8');
    res.send(fs.readFile('../file.txt', 'utf8'));
});

app.post('/write', (req, res) => {
    let data = req.body.text;
    fs.appendFileSync('../file.txt', data + ' ', 'utf8');
    res.send(fs.readFileSync('../file.txt', 'utf8'));
});


app.listen(3000);