var fs = require('fs')

content = "ATMKBPJ"
var writer = fs.createWriteStream('output.txt');
writer.write(content, () =>  {
  console.log("Writing finished");
})

writer.end();



writer.on('finish', () => {
  cconsole.log("All writes are now complete.");
})

writer.on('error', (err) => {
  console.log("Error occurred: ", err.message);
})

// duplex stream
content = "ATMKBPJ"
var writer = fs.createWriteStream('output.txt');
writer.write(content, () =>  {
  console.log("Writing finished");
})

writer.end();



writer.on('finish', () => {
  cconsole.log("All writes are now complete.");
})

writer.on('error', (err) => {
  console.log("Error occurred: ", err.message);
})

