// let obj = {
//     name:"Ramakrishan",
//     id: 202,
//     salary: 100+"cr",
// }

// console.log(obj.name, obj.id, obj.salary)

// let obj = new Object({name:"Ramakrishan",});

// console.log(obj)

// let obj = Object.create({name:"Ramakrishan",})
// console.log(obj)

// function obj(name, id, salary){
//     this.name1 = name;
//     this.id1 = id;
//     this.salary1 = salary;

// }

// let obj1 = new obj("ram",202, 50)
// let obj2 = new obj("Krishna", 203, 60)

// console.log(obj1)

// console.log(obj)

// let obj = Object.defineProperty({},
//     "Employee",{
//         value:{
//             name : "Ram",
//             id: 202,
//         }
//     }
// )

// console.log(obj)

// let obj = Object.defineProperties(
//   {},
//   {
//     first_Employee: {
//       value: {
//         name: "Ram",
//         id: 202,
//       },
//     },
//     second_Employee: {
//       value: {
//         name: "Krishna",
//         id: 203,
//       },
//     },
//   }
// );

// console.log(obj);


// let obj = {
//     name:"Ramakrishan",
//     id: 202,
//     salary: 100+"cr",
// }

// let obj1 = JSON.stringify(obj);
// console.log(obj1)


// let obj2 = JSON.parse(obj1)
// console.log(obj2)


// function addition(val, callback){
//     callback(val+5, false);
// }

// function subtraction(val, callback){
//     callback(val-5, true);
// }

// addition(10, (add, err)=>{
//     if(!err) {
//         console.log(add)
//         subtraction(add, (sub, err)=>{
//             console.log(sub)
//             console.log(err)
//         })
//     }
// })
