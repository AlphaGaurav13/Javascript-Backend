var fs = require('fs');
var zlib = require('zlib');

var reader = fs.createReadStream('Streams/compressed_output.txt.gz');
var writer = fs.createWriteStream('Streams/example.txt');

var gunzip = zlib.createGunzip();

reader.pipe(gunzip).pipe(writer);

console.log("File decompressed successfully");
