
let section = document.getElementById('container');
console.log(section)


const fetchApi = async() => {
    let data =await fetch(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
      );
      
      console.log(data)

      let finalData = await data.json();
      console.log(finalData)
      let result = finalData.top_gainers.map((m)=>{
        section.innerHTML += `
        <div class="container2">
            <h2>${m.ticker}</h2>
            <h3>Price: ${m.price}</h3>
            <h4>Change Amount: ${m.change_amount}$</h4>
            <h4>Change Percentage: ${m.change_percentage}</h4>
        </div>
        ` 
      })
      console.log(result)
}


fetchApi()