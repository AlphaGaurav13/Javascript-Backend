var expr = require('express');
var obj = new expr();
var encoded = expr.urlencoded({extended : true});

obj.get('/', (req, res) => {
  res.send('hi from express');
})


obj.post('/postdetails', encoded, (req, res) => {
  res.send({
    username : req.body.n1,
    password : req.body.p1
  })
})


obj.get('/dashboard', (req, res) => {
  res.sendFile(__dirname+'/form.html');
})

obj.get('/getdetails', (req, res) => {
  // res.send({
  //   username : req.query.n1,
  //   password : req.query.p1
  // })

  var number1 =parseInt(req.query.n1);
  var number2 =parseInt(req.query.n2);
  var sum = number1 + number2;
  res.send("the sum is " + sum);
})

obj.listen(3001, () => {
  console.log("server is running")
})

