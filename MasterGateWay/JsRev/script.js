// Fundamental of Javascript
// arrays and objects
// functions return 
// async js coding


var arr = [1, 2, 3];

// foreach map filter find indexOf

// arr.forEach(function(val) {
//   console.log(val + " Gaurav");
// })


// var gaurav = arr.map(function(val) {
//   return 13;
// })


// var gaurav = arr.filter(function(val) {
//   if(val > 1) {
//     return true;
//   }else {
//     return false;
//   }
// })

// var gaurav = arr.find(function(val) {
//   if(val == 2) {
//     return val;
//   }
// }) // return the very first matching value

// var temp = arr.indexOf(13); // 2
// console.log(temp); // return -1 of not found 

// // console.log(gaurav);


// OBJECT


// var obj = {
//   name : "Gaurav",
// }


// console.log(obj.name);


// FUNCTIONS


// function gaurav() {
//   return 69;
// }


// var h = gaurav();
// console.log(h);

// ASYNC JS CODING


// Synchronous code : line by line code chale isse kehte hain synchronous code


// Async code : jo bhi code async nature ka ho use side stack me bhej do and agle code ko chalao jo bhi sync nature ka ho 
                // jab bhi sara sync code khtam ho jaye , tab check karo ki async code complete hua ki nhi agar vo completre hua ho toh use main stack me lao aur chalao


// async function gaurav() {
//   var blob = await fetch('https://randomuser.me/api/');
//   var data = await blob.json();

//   console.log(data);
// }


// console.log("Start");
// gaurav();
// console.log("End");