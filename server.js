var expr = require('express');
var obj = new expr();

obj.get('/', (req, res) => {
  res.send('hi from express');
})



obj.get('/dashboard', (req, res) => {
  res.sendFile(__dirname+'/form.html');
})

obj.get('/getdetails', (req, res) => {
  res.send({
    username : req.query.n1,
    password : req.query.p1
  })
})

obj.listen(3001, () => {
  console.log("server is running")
})

