// function myFunction(a,b){
//     document.write(a*b)
// }

// let a = myFunction(prompt("Enter first number"), prompt("Enter second number"))

// document.write(prompt("Enter first number")*prompt("Enter second number"));

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }

//   let value = toCelsius();

//   console.log(value);

//   document.write(Math.random().toString().slice(2,8).padEnd("0"));

//   function myFunction(a) {
// if(a>=0) document.write("Positive ");
// else document.write("Negative ");

//   }

//   let a = prompt("Enter the number")

//   myFunction(a)
// let size = prompt("Enter the number");
// let a = prompt("Enter the number");
// let arr1 = prompt([]);

// console.log(arr1)

// function demo(a,b) {
//     console.log(a)
//     console.log(b)
// }

// const demo = (a,b) => {
//     console.log(a)
//     console.log(b)
// }

// function test() {
//     console.log("hello world")
// }
// demo(1, function add(a,b){
//     console.log(2)
//     console.log(3)
// });

// add(()=> 2,2)

// function add(a,b){
//     console.log(a)
// console.log(b)
// }

// (
//     function demo() {
//         let a = 20;
//         console.log(a)

//     }
// ());

// demo();

// let n = prompt("Enter the size of an array")

// var arr1 = new Array[n];

//! sum and average of the arrays

// let size = prompt("Enter the size of an array");
// let array = [];
// let sum = 0;

// // array.push(prompt("Enter the size of an array"));

// for (let i = 0; i < size; i++) {
//   array.push(prompt("Enter the number"));
//   console.log(array[i]);
// }

// // console.log(array.toString().split("").sort().join(""))

// console.log(array); //reverse the array

// for (let i = 0; i < size; i++) {
//   sum = sum + Number(array[i]);
// }

// console.log(sum);

// console.log(sum / size);
// console.log(array.length)

//! Largest element in the array

// console.log(array.sort());
// console.log(array[size - 1]);

//! check whether the element is present in the array

// let key = prompt("Enter element");
// let found;

// for (let i = 0; i < size; i++) {
//   if (array[i] === key) {
//     found = 1;
//     break;
//   }
// }

// if (found) {
//   console.log("Element found");
// } else {
//   console.log("Element not found");
// }

//! count even and odd elements in the array

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < size; i++) {
//   if (Number(array[i]) % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// console.log(evenCount, oddCount);

//! Odd and Even element into two seperate array

// let evenArray = [];
// let oddArray = [];

// for (let i = 0; i < size; i++) {
//   if ((array[i]) % 2 === 0) {
//     evenArray.push(array[i]);
//   } else {
//     oddArray.push(array[i]);

//   }
// }

// console.log(evenArray);
// console.log(oddArray);

//! remove multiple elements from array

// for(let i = 0; i < size; i++) {
//     if(array[i]==array[i+1]) {
//         delete array[i];
//         array.splice(i, 1);
//     }
// }
// console.log(array)

//! insert an element in the array

function demo(triangle, circles, square, rectangle,parallelogram,rhombus, tropezoid,pentagon) {
  let bs = Number(prompt("Enter the base"));
  let h = Number(prompt("Enter the height"));
  let a = Number(prompt("Enter the 1st side"))
  let b = Number(prompt("Enter the 2nd side"));
  let c = Number(prompt("Enter the 3rd side"));
  let r = Number(prompt("Enter the radius"));
  let l = Number(prompt("Enter the length"));
  let w = Number(prompt("Enter the width"));
  let d = Number(prompt("Enter the 4th side"))
  let n = Number(prompt("Enter the number of sides"))


  triangle((1 / 2) * bs * h, (a+b+c));
  
  circles(3.14 * r * r, 2*3.14*r);

  square(l*l, 4*l);
  
  rectangle(l*w, 2*(l+w))

  parallelogram(bs*h, 2*(l+b))
  
  rhombus(b*h, 2*(l+b))

  tropezoid(((a+b)/2)*h,a+b+c+d)

  pentagon((1/2)*h*n*a, 5*a)

}

demo(
  (x,p) => {
    document.write(`Area of Triangle : ${x}`);
    document.write("<br>");
    document.write(`perimeter of Triangle : ${p}`);
    document.write("<br>");
  },
  (ca,cp) => {
    document.write(`Area of circle: ${ca}`);
    document.write("<br>");
    document.write(`perimeter of circle: ${cp}`);
    document.write("<br>");
  },
  (sa,sp) => {
    document.write(`Area of Square: ${sa}`);
    document.write("<br>");
    document.write(`Perimeter of Square: ${sp}`);
    document.write("<br>");
  },
  (ra,rp) => {
    document.write(`Area of Rectangle: ${ra}`);
    document.write("<br>");
    document.write(`Perimeter of Rectangle: ${rp}`);
    document.write("<br>");
  },
  (pa,pp) => {
    document.write(`Area of Parallelogram: ${pa}`);
    document.write("<br>");
    document.write(`Perimeter of Parallelogram: ${pp}`);
    document.write("<br>");
  },
  (ra,rp) => {
    document.write(`Area of Rhombus: ${ra}`);
    document.write("<br>");
    document.write(`Perimeter of Rhombus: ${rp}`);
    document.write("<br>");
  },
  (ta,tp) => {
    document.write(`Area of Tropezoid: ${ta}`);
    document.write("<br>");
    document.write(`Perimeter of Tropezoid: ${tp}`);
    document.write("<br>");
  },
  (pa,pp) => {
    document.write(`Area of Pentagon: ${pa}`);
    document.write("<br>");
    document.write(`Perimeter of Pentagon: ${pp}`);
    document.write("<br>");
  },

);
