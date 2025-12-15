var exp = require('express');
var obj = new exp();

var fs = require('fs');
var encoded = exp.urlencoded({extended : true});

obj.get('/', (req, res) => {
  res.sendFile(__dirname+'/form2.html');
})
// obj.get('/detel')


obj.post('/deletefile', encoded, (req, res) => {
  var filename = req.body.file1;
  console.log(filename);

  fs.unlink(filename, (err) => {
    if(err) {
      res.send("File deletion failed: " + err.message);
    } else {
      res.send("File deleted successfully");
    }
  })

})



obj.listen(3002, ()=> {console.log("Practice server is running")});