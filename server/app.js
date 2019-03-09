const express = require('express');
const app = express();
const path = require('path');

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname, '../',  'client/index.html'));
// });

// app.get('/index.js',function(req,res){
//     res.sendFile(path.join(__dirname, '../',  'client/index.js'));
// });

app.use('/', express.static(path.join(__dirname, '../',  'client')));

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');