var fs = require('fs');


var reader = fs.createReadStream('Streams/example.txt');
var writer = fs.createWriteStream('Streams/output.txt');

writer.on('pipe', () => {
  console.log("working on pipe");
})

reader.pipe(writer);
reader.unpipe(writer);