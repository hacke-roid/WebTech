// function demo(a){
// let base = Number(prompt("Enter the number"))
// a(base);
//     a(1);

// };
// function test1(b){
//     console.log(b)
//     test2(demo1());
// }
// function test2(x){
//     x(1,2);
// }
// function demo1(a,b){
//     console.log(a+b)
// }

// demo(test1);

// let a = Number(prompt("Enter the number"))

// if(a>=18){
//     console.log("U r eligible to vote")
// }

// else{
//     console.log("U r not eligible to vote")
// }

// switch(a){
//     case 1 : {
//         console.log("Monday")
//         break;
//     }
//     case 2 : {
//         console.log("Tuesday")
//         break;
//     }
//     case 3 : {
//         console.log("Wednesday")
//         break;
//     }
//     case 4 : {
//         console.log("Thursday")
//         break;
//     }
//     case 5 : {
//         console.log("Friday")
//         break;
//     }
//     case 6 : {
//         console.log("Saturday")
//         break;
//     }
//     case 7 : {
//         console.log("Sunday")
//         break;
//     }
//     default: {
//         console.log("Invalid Day")
//     }
// }

// let b= Number(prompt("Enter the number"))
// for(let i=0;i<=a;i++){
//     console.log(i);
// }

// let b = Number(prompt("Enter the 2nd Number"))
// console.log("while loop")
// let cnt = 0;
// while(b<=10){
//     console.log(cnt);
//     cnt++;
//     b++;
// }

// console.log("do while loop")
// let val = 0;
// let c = Number(prompt("Enter the number"))
// do{
//     console.log(val);
//     val++;
//     a++;
// }while(a<=10)

// (()=>{console.log("hi")})();

// let array = [];

// let size = Number(prompt("Enter the size of the array"))

// for(let i=0; i<size; i++){
//     array.push(prompt("Enter the elements"))
// }
// let key=prompt("Enter the number");
// for(let i=0;i<size;i++){
//     if(array[i].length==key){
//         console.log(array[i])
//     }
// }

// let a = prompt("Enter the String")

// for(let i=0; i<a.length; i++){
//     if(a[i].toUpperCase()){
//         console.log(a[i].toLowerCase())
//     }
//     else{
//         console.log(a[i].toUpperCase())
//     }
// }

let num = prompt("Enter the number")
let x= prompt("Enter the first number")
let y= prompt("Enter the second number")

let a = num.split("");
let b = a.splice(x,y).reverse();
console.log(a.join("")+b.join(""));

// let size = Number(prompt("enter the size"))
// let arr = [];
// for(let i=0; i<size; i++){
//     arr.push(Number(prompt(`Enter the ${i} element`)))
// }

// console.log(arr)
// let c = arr.sort();
// let largest = arr[size-2]+arr[size-1]
// console.log(`${largest} with elements ${arr[size-2]} and ${arr[size-1]}`)
// let smallest = arr[0]+arr[1];
// console.log(`${smallest} with elements ${arr[0]} and ${arr[1]}`)

// function hello(){
//     console.log("Hello world!")
// }
// hello()

// document.getElementById("hello").innerHTML = "hello world!"

// let loginData = function validateForm() {
//   let admin = document.getElementById("admin").value;
//   let password = document.getElementById("password").value;
//   console.log(admin);
//   console.log(password);
// }

// const jsonData = JSON.stringify(loginData,null,2);

// console.log(jsonData);


// document.addEventListener("click", function submit(){
//     console.log("clicked")
//     if(confirm("Are you sure")===true){
//         document.getElementById("nextPage").innerHTML="Please enter"
//     }
//     else{
//         console.log("false")
//     }
// })
// const express = require('express');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const cors = require('cors');  // Import cors
// const app = express();
// const port = 3000;

// // Use CORS middleware
// app.use(cors());

// // Middleware to parse JSON from incoming requests
// app.use(bodyParser.json());
// // const data = req.body; 
// // Route to receive and store JSON data
// app.post('/save-data', (req, res) => {
//     const data = req.body;  // Data sent from the client

//     // Convert JSON data to a string and save to file
//     fs.writeFile('db.json', JSON.stringify(data, null, 2), (err) => {
//         if (err) {
//             console.error('Error saving data:', err);
//             res.status(500).send('Failed to save data');
//         } else {
//             res.status(200).send('Data saved successfully');
//         }
//     });
// });
// app.get('/get-data', (req, res) => {
//   fs.readFile('db.json', 'utf8', (err, data) => {
//       if (err) {
//           console.error('Error reading data:', err);
//           res.status(500).send('Failed to read data');
//       } else {
//           try {
//               const jsonData = JSON.parse(data); // Parse the JSON data
//               res.status(200).json(jsonData); // Send the JSON data as response
//           } catch (parseError) {
//               console.error('Error parsing JSON:', parseError);
//               res.status(500).send('Failed to parse data');
//           }
//       }
//   });
// });


// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
