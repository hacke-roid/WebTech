// ! Scope : It determines the accessibility of the variable

// ? 4 types of scope
// 1. Global scope
// 2. Script Scope
// 3. Block scope
// 4. local/function scope

// ? Global scope

// var a = 100;
// console.log(a)

// ? Script scope

// let a = 100;
// console.log(a)

// ? Block scope

// var a = 100;
// let b = 200;
// const c=300;

// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     var d = 400;
//     let e = 500;
//     const f = 600;
//     console.log(d , e , f)
    
// }

// console.log(f)

// ? Local/function scope

var a = 100;
let b = 200;
const c=300;

function demo() {
    console.log(a)
    console.log(b)
    console.log(c)
    var d = 400;
    let e = 500;
    const f = 600;
}

demo()

console.log(d)
console.log(e)