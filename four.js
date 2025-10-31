// Transformable streams- Compressing

// Q. compress the file using all the three methods of zlib module



var fs = require('fs');

var zlib = require('zlib');


var reader = fs.createReadStream('Streams/example.txt');
var writer = fs.createWriteStream('Streams/compressed_output.txt1.gz');

var gzip = zlib.createDeflate();

reader .pipe(gzip).pipe(writer);


console.log("file compressed");