// let p = new Promise((resolve, reject) => {
//     let task = confirm("Are yor completerd ur work");

//     if(task) {
//         setTimeout(() =>{
//             resolve("Completed")
//         }, 5000)
//     }
//     else {
//         setTimeout(()=>{
//             reject("Failed")
//         }, 5000)
//     }
// })

// console.log(p)

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = confirm("Are yor completerd ur work");
//     if (success) {
//       resolve("success");
//     } else {
//       reject("Failed");
//     }
//   });
// });

// p 
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// let p1 = new Promise((res,rej)=>{
//   res("Resolved 1");
//   rej("Rejected 1");
// })

// let p2 = new Promise((res,rej)=>{
//   res("Resolved 2");
//   rej("Rejected 2");
// })

// let p3 = new Promise((res,rej)=>{
//   res("Resolved 3");
//   rej("Rejected 3");
// })

// let p4 = new Promise((res,rej)=>{
//   res("Resolved 4");
//   rej("Rejected 4");
// })

// Promise.all([p1,p2,p3,p4])
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

let data = fetch("https://api.github.com/users");

console.log(data);

data.then((response) => {
  console.log(response);
  let finalData = response.json();
  console.log(finalData)  
  finalData.then((result)=>{
    console.log(result)
  })
    
})