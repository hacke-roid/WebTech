// let str = [1,2,3,4,5,6];

// let x = Number(prompt("Enter the value of x"))
// let y = Number(prompt("Enter the value of y"))

// let b = str.split(x,y+1)
// console.log(str)
// // console.log(a)
// // console.log(b)
// // console.log(a.join("")+ b.join(""))
// console.log(b)

// // let a = "hello"

// console.log(a.split("").slice(2,4))

// let a = "sanjana"

// console.log(a.split("").slice(2,4+1).reverse().join(""))

// function splitArray(array, indices) {
//     let result = [];
//     let start = 0;

//     // Add each part of the array using the indices
//     for (let i = 0; i < indices.length; i++) {
//       result.push(array.slice(start, indices[i]));
//       start = indices[i];
//     }

//     // Add the remaining part of the array
//     result.push(array.slice(start));

//     return result;
//   }

//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   let x = Number(prompt("Enter the value for x"))
//   let y = Number(prompt("Enter the value for y"))
//   // Split at indices 3 and 6
//   const parts = splitArray(array, [x, y+1]);
// //   console.log(parts.join(""));

//   console.log(parts);

// let size = Number(prompt("Enter the size of the array"))

// let array=[];

// for(let i=0; i<size; i++){
//     array.push(Math.floor(Math.random()*100));
// }
// console.log(array)
// let size = Number(prompt("Enter the size of the array"))
// let array = [];

// for(let i=0; i<size; i++){
//     array.push(Math.floor(Math.random()*100));;
// }

// let x = Number(prompt("Enter the value for x"))
// console.log(array)
// let result = array.findIndex((ele)=>{
//     if(ele>=50){
//         console.log(ele);
//     }
// })
// console.log(array)

// document.getElementsByTagName("h1").innerHTML = "array"

// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");

// const z = x.getElementsByTagName("div")

// document.getElementById("demo").innerHTML = y[0].innerHTML\

// document.getElementById("demo").innerHTML = "Kishan"
// let count = 1;
// function demo(){
//     document.getElementById("demo").innerHTML = "Hello kishan"
//     document.getElementById("demo").style.color = "red"
//     document.getElementById("demo").innerHTML = count++;
//     console.log(count)
// }

// let a = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(a);

//! 1st method

// let [...b] = a;

// console.log(b)

// a.push();
// console.log(a);
//! 2nd method

// let result = a.slice(0);
// console.log(result)

//! 3rd method
// let result = a.splice(0);
// console.log(result)

//! 4th method

// let result = a.filter((ele)=>{
//     return ele=ele;
// })
// console.log(result)
// console.log(a)

//! 5th method

// let result = [];

// for(let i=0; i<a.length; i++){
//     result.push(a[i])
// }

// console.log(result)

//! 6th method

// let result = [];

// for(let i=a.length-1; i>=0; i--){
//     result.pop(a[i])
// console.log(object)
// }
// console.log(result.reverse())
// console.log(a)
// let b = [];

// function demo() {
  // let result = document.getElementById("demo").value;
//   let result = document.getElementById("demo").innerText;
  // let result = document.getElementById("demo").textContent;
  // let result = document.getElementById("demo").innerHTML;
  // let result = document.getElementById("demo").getAttribute("value");
  // let result = document.getElementById("demo").getAttribute("style");
  // let result = document.getElementById("demo").getAttribute("class");
//   document.getElementById("demo").innerHTML = "kick your ass";
  //   let result = document.getElementById("demo").innerHTML;
//   console.log(result);
// }


function handleclick() {
    let obj = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
        
    };
    
    document.getElementById("user.name").innerHTML = obj.username;
    document.getElementById("user.password").innerHTML = obj.password;
  
}
// handclick();