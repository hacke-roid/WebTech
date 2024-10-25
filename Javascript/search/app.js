let card = document.getElementById("card-container");
let input_data = document.getElementById("input-data");

let cart = [];

const fetching = async () => {
  console.log("hii");
  let data = await fetch("product.json");
  console.log(data);

  let finalData = await data.json();
  console.log(finalData.product);

  let products = finalData.product.map((product,index) => {
    card.innerHTML += `
            <div class="card">
                <img src="${product.img}" alt="${product.Maker}" class="img-container">
                <div class="font-title">
                <p>${product.Title}</p>
                </div>
                <p>${product.Description}</p>
                <p>Price: ${product.Price}</p>
                <div class="btn-add-cart">
                <button id="add-btn" data-index=${index}>Add to Cart</button>
                <div class="add-to-cart">
                    
                </div>
                </div>
            </div>
        `;
  });

  // let add_cart = document.querySelectorAll(".add-btn");

  // add_cart.forEach((m)=>{
  //   m.addEventListener("click", () => {
  //       let productIndex = e.target.getAttribute('data-index');
  //       let selectedProduct = finalData.product[productIndex];
  //       addToCart(selectedProduct);
  //   });
  // })

  // const addToCart = (product) => {
  //   cart.push(product);
  //   console.log(cart);
    
  // }

  input_data.addEventListener("input", (e) => {
    let inputValue = input_data.value;
    console.log(inputValue);

    let filteredProducts = finalData.product.filter((product) =>
      product.Title.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(filteredProducts)
    card.innerHTML = "";
    let newProducts = filteredProducts.map((product) => {
      card.innerHTML += `
            <div class="card">
                <img src="${product.img}" alt="${product.Maker}" class="img-container">
                <div class="font-title">
                <p>${product.Title}</p>
                </div>
                <p>${product.Description}</p>
                <p>Price: ${product.Price}</p>
                <div class="btn-add-cart">
                <button>Add to Cart</button>
                </div>
            </div>
        `;
    });
    console.log(filteredProducts);
  });

  // document.getElementById("products").innerHTML = products.join("<br>");
};

fetching();
