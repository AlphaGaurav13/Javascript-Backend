var exp = require('express');
var obj  = new exp();

var fs = require('fs');
var encoded = exp.urlencoded({extended : true});

obj.get('/', (req, res) => {
  res.send('Server is working fine');
})

obj.post('/hero', (req, res) => {
  res.sendFile(__dirname+'/form.html');
})

obj.get('/getinfo', (req, res) => {