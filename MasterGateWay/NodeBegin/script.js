// Node js Basics
// Intro to Node js
// Installing Node js and Npm
// Working with modules
// File System Operations
// Understanding HTTP Module


// Starting Of js In a life of Node :
// js is beckend nhi ban skta
// kyuki js ke pass vo functionallity nhi hain jisse beckend banate hain
// ryan dahl ne socha js se beckend banna chahiye
// google chrome ka v8 engine ka code open source hain and ryan dahl us code me chhedhkhani kar rha hain 
// kyuki chrome ka v8 engine bna hain c++ mein
// fir usne socha ki hume toh js me code karna hain 



// hum js ka code likhenge jo ki wrapper layer of js recive karega and vo code v8 engine ke c++ modules ke sath ak server create karega


// Node js is a js Runtime enviroment


// node and npm
// working with node and npm
// npm init



// npm init --> package.json --> lekha jokha of project
const fs = require('node:fs');
// What we have to study

// 1) writefile
// 2) appendfile
// 3) copyfile
// 4) rename
// 5) unlink

fs.writeFile('mytext.txt', 'this is my content', function(err) {
  if(err) {
    console.log(err);
  }else {
    console.log("Successfully written to the file");
  }
})

// fs.appendFile('mytext.txt', '\n this another appended line', function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("successfully appended to the file");
//   }
// })


// fs.rename("mytext.txt", "Gaurav.txt", function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("Renamed the file Successfully");
//   }
// })


// fs.copyFile("Gaurav.txt", "./copy/cpoy.txt", function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("copied the file Successfully");
//   }
// })


// fs.unlink("Gaurav.txt", function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("Deleted the file Successfully");
//   }
// })

// fs.rm("./copy", { recursive: true}, function(err) {
//   if(err) {
//       console.log(err);
//     }else {
//       console.log("Deleted the folder Successfully");
//     }
// })


fs.readFile("mytext.txt", 'utf-8',function(err, data) {
  if(err) {
    console.log(err);
  }else {
    console.log(data);
  }
})