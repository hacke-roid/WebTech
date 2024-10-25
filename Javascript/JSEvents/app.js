// let data = fetch("https://api.pexels.com/v1/");

// console.log(data)

// function onClick(){
//     document.getElementById("div4").style.background = "hotpink"
// }

// function onDBClick(){
//     document.getElementById("div5").style.background = "lightblue"
// }

// function onMouseEnter(){
//     document.getElementById("div1").innerHTML += "$"
// }

// function onMouseMove(){
//     document.getElementById("div2").innerHTML += "$"
// }

// function onMouseOver(){
//     document.getElementById("div3").innerHTML += "$"
// }

let div = document.querySelectorAll("div");

console.log(div);

let final = Array.from(div);
console.log(final);
final.map((m) => {
  m.addEventListener("mouseover", (e) => {
    m.style.background = m.innerHTML;
  });
});

final.map((m) => {
  m.addEventListener("mouseout", (e) => {
    m.style.background = "initial";
    // console.log(e)
  });
});

final.map((m) => {
  m.addEventListener("click", (e) => {
    console.log(m.textContent);
  });
});

let input = document.querySelector("input");

console.log(input);

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  document.body.style.background = "red";
});

input.addEventListener("keydown", (e) => {
  console.log(e.target.value);

  document.body.style.background = "green";
});

function fetchApi() {
  let data = fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
  );
  console.log(data)
}
fetchApi()

