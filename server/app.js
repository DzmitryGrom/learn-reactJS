const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');