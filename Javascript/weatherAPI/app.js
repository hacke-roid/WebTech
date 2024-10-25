const fetchApi = async(inputValue) => {
  let apiKey = "58a1480183529adcab6007ec736e90f2";
  let city = inputValue;
  console.log(city)
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=matric`
  );

//   console.log(data);
  let finalData = await data.json();
  console.log(finalData)
  console.log(finalData.coord)
  console.log(finalData.main)
  console.log(finalData.sys)

}


let btn = document.getElementById("sub-btn");

btn.addEventListener("click", fetchApi)

// let inputText = document.querySelector("input");
// console.log(inputText)
btn.addEventListener("click", () =>{
    let inputValue = document.querySelector("input").value
    console.log(inputValue)
    fetchApi(inputValue)
})
// console.log(inputValue)

