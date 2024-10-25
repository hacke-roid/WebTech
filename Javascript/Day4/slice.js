// let s = "JavaScript"
// console.log(s.length)
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())

//! Slice method
// console.log(s.slice(2,5))
// console.log(s.slice(4))
// console.log(s.slice(4,2))
// console.log(s.slice(5,5))
// console.log(s.slice(s,5))
// console.log(s.slice(-6,-4))
// console.log(s.slice(-4,-6))

//! substring method

// console.log(s.substring(2,5))
// console.log(s.substring(4))
// console.log(s.substring(4,2))
// console.log(s.substring(5,5))
// console.log(s.substring(s,5))
// console.log(s.substring(-6,-4))
// console.log(s.substring(-4,-6))

//! includes method 

// console.log(s.includes("s"))
// console.log(s.includes("Src"))
// console.log(s.includes("x"))
// console.log(s.includes("a",7))
// console.log(s.includes("a",3))

//! indexOf method

// console.log(s.indexOf("S"))
// console.log(s.indexOf("Src"))
// console.log(s.indexOf("x"))
// console.log(s.indexOf("a",7))
// console.log(s.indexOf("a",3))

//! lastIndexOf method

// console.log(s.lastIndexOf("S"))
// console.log(s.lastIndexOf("Src"))
// console.log(s.lastIndexOf("x"))
// console.log(s.lastIndexOf("a",7))
// console.log(s.lastIndexOf("a",3))

// loops
// let a = "hello";

// for(let i=0; i<a.length; i++){
//     console.log(a.indexOf("e",i));
// }

// let a = "SanDy";
// let cnt=0;
// for(let i=0; i<a.length; i++){
//     if(a[i]>="A" && a[i]<=`Z`){
//         console.log(a[i]);
//         cnt++;
//     }
// }

// console.log(cnt)

// let a = "hello";
// // console.log(a.length)
// let str = "";

// for(let i=a.length-1; i>=0; i--){
//     str=str+a[i];
// }

// console.log(str);

let a= "abdul";

console.log(a.split("").reverse().join(""))