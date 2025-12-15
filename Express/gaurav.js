var exp = require('express');

var obj = new exp();
var encoded= exp.urlencoded({extended : true});
obj.get('/', (req, res) => {
  res.sendFile(__dirname+'/home.html');
})

obj.get('fact', (req, res) => {
  res.sendFile(__dirname+'/fact.html');
})

obj.post('/factorial', encoded,(req, res) => {
  var num = parseInt(req.body.num);
  var fact = 1;

  for(let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  res.send("factorial of " + num + " is " + fact);
}) 

obj.listen(3003, ()=> {console.log("home server is running")});
