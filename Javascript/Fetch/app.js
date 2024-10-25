// let data = fetch("https://dummyjson.com/products");

// console.log(data);
// data.then((m)=>{
//     // console.log(m)
//     let finalData = m.json();
//     // console.log(finalData)
//     finalData.then((result)=>{
//         // console.log(result.products)
//         // console.log(result.products[0].id);
//         for(let i=0; i<result.products.length; i++){
//             console.log(result.products[i].images);
//             document.getElementById("images").innerHTML = result.products[i].images
//         }
        
//     })
// })

// console.log(data)

let section = document.getElementById("container");
console.log(section);

let fetchApi = async()=>{
    let data = await fetch("https://dummyjson.com/products");
    let finalData = await data.json();
    console.log(finalData.products)
    let images = finalData.products.map(product=>{
        console.log(product.images)
        section.innerHTML += `
            <div>
                <img src=${product.images[0]}></img>
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <h2>Price: ${product.price}</h2>
                <h3>In Stock ${product.stock}</h3>
                <p>Quantity: <input type="number" id="quantity-${product.id}"></p>
                <button onclick="addToCart(${product.id}) class="greenbutton">Add to Cart</button>
                <button onclick="removeCart(${product.id})">Remove</button>
                <p id="cart-${product.id}" style="color:red;"></p>
            </div>
        `

        // section.innerHTML += productHTML;
    });
    document.getElementById("images").innerHTML = images.join("<br>");
}

function addToCart(productID){
    let quantity = document.getElementById(`quantity-${product.id}`).value;
    document.getElementById(`cart-${productId}`).textContent = `Added ${quantity} to the cart!`;
}

fetchApi();

{/* <div>
                <img src=${product.images[0]}></img>
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <h2>Price: ${product.price}</h2>
                <h3>In Stock ${product.stock}</h3>
                <p>Quantity: <input type="number" id="quantity-${product.id}"></p>
                <button onclick="addToCart(${product.id}) class="greenbutton">Add to Cart</button>
                <button onclick="removeCart(${product.id})">Remove</button>
                <p id="cart-${product.id}" style="color:red;"></p>
            </div> */}